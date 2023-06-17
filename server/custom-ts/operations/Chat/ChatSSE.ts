// @ts-nocheck
import fetch from '@web-std/fetch';
import { createOperation, z } from 'generated/fireboom.factory'

const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");

const client = new OpenAIClient("https://freetalkchatgpt.openai.azure.com", new AzureKeyCredential("2ce466c24f924a51b843be70709621d2"));
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
          const id = Math.random().toString(36).substring(2)
          const resStrArr: string[] = []
          let result: string
          const events = await client.listChatCompletions('gpt-35-turbo_0301', msg, { maxTokens: 2048 });
          for await (const event of events) {
            for (const choice of event.choices) {
              const delta = choice.delta?.content;
              if (delta !== undefined) {
                console.log("delta:" + delta)
                yield { completion: delta, id: id }
              }
            }
          }
          // 更新机器人回答的文字内容
          result = resStrArr.join('')
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
