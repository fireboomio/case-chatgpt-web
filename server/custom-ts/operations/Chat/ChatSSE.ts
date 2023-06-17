// @ts-nocheck
import fetch from '@web-std/fetch';
import { createOperation, z } from 'generated/fireboom.factory'

function readChunks(reader: ReadableStreamDefaultReader<Uint8Array>) {
  return {
    async*[Symbol.asyncIterator]() {
      let readResult = await reader.read();
      while (!readResult.done) {
        yield readResult.value;
        readResult = await reader.read();
      }
    },
  };
}

export default createOperation.subscription({
  input: z.object({
    prompt: z.string(),
    chatId: z.number(),
    regenerateId: z.optional(z.string())
  }),
  handler: async function* ({ input, internalClient }) {
    const chatId = +input.chatId
    const prompt = input.prompt
    try {
      // 存储用户发问
      const insertedQ = await internalClient.mutations['Chat__CreateOne']({
        input: {
          text: prompt,
          chatId: chatId,
        }
      })
      // 创建一个空回答
      if (!insertedQ.errors) {
        const insertedA = await internalClient.mutations['Chat__CreateOne']({
          input: {
            text: '',
            chatId: chatId,
            parentMessageId: insertedQ.data!.data!.id!,
          }
        })
        if (!insertedA.errors) {
          // 读取历史对话
          const msg: { role: 'system' | 'user' | 'assistant', content: string }[] = []
          const { data, errors } = await internalClient.queries['Chat__GetByHistory']({
            input: {
              historyId: chatId,
            }
          })
          if (!errors) {
            // 删除最后一个预置的空机器人回答
            data!.data!.pop()
            for (const item of data!.data!.reverse()) {
              // 无parentMessageId表示用户发问，否则是机器人返回结果
              if (item.parentMessageId) {
                console.log("item.text:" + item.text!)
                if (item.text != null && item.text != "") {
                  msg.push({ role: 'assistant', content: item.text! })
                } else {
                  msg.push(({ role: "user", content: prompt }))
                }
              } else {
                msg.push(({ role: "user", content: item.text! }))
              }
            }
          } else {
            throw errors
          }

          // const res = await fetch('https://api.openai.com/v1/chat/completions', {
          const res = await fetch('https://freetalkchatgpt.openai.azure.com/openai/deployments/gpt-35-turbo_0301/chat/completions?api-version=2023-05-15', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              //'Authorization': 'Bearer ' + process.env.OPENAI_KEY,
              'api-key': '2ce466c24f924a51b843be70709621d2',
            },
            body: JSON.stringify({
              //model: 'gpt-3.5-turbo',
              model: 'gpt-35-turbo',
              messages: msg,
              stream: true
            })
          })

          let result: string
          if (res.ok) {
            // const headerData = 'data:'
            // const headerDataLength = headerData.length
            // const trimPrefixFunc = function f(line: string): string {
            //   return line.replace("\n",)
            // }

            //   return
            // }
            const id = Math.random().toString(36).substring(2)
            const resStrArr: string[] = []
            const reader = res.body!.getReader();
            for await (const chunk of readChunks(reader)) {
              const str = chunk.toString()
              console.log("str:" + str)
              const lines = str.split(/data: s*(?![^"]*"\,)/).filter(Boolean)
              for (let line of lines) {
                if (line === '[DONE]') {
                  continue
                }
                console.log("line:" + line)
                var lastIndex = line.lastIndexOf("}")
                console.log("lastIndex:" + lastIndex)
                line = line.substring(0, lastIndex + 1)
                console.log("new line:" + line)
                const json = JSON.parse(line)
                if (json.choices.length == 0) {
                  continue
                }

                const delta = json.choices[0].delta
                if (!delta.content) {
                  continue
                }

                resStrArr.push(delta.content)
                yield { completion: delta.content, id: id }
              }
            }
            result = resStrArr.join('')

          } else {
            result = res.statusText
            yield { completion: result }
          }
          // 更新机器人回答的文字内容
          const updateResp = await internalClient.mutations['Chat__UpdateChatText']({
            input: { id: insertedA.data!.data!.id!, text: result }
          })
          if (updateResp.errors) {
            console.log(updateResp.errors)
          }
        }
      }
    } finally {
      console.log('client disconnected');
    }
  },
});
