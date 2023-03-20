import axios from 'axios'
import { createOperation, z } from '../../generated/fireboom.factory'

export default createOperation.subscription({
  input: z.object({
    prompt: z.string(),
    chatId: z.string(),
    regrenerateId: z.string()
  }),
  handler: async function* ({ input }) {
    try {
      // setup your subscription here, e.g. connect to a queue / stream
      // for (let i = 0; i < 10; i++) {
      //   yield {
      //     id: input.id,
      //     name: 'Jens',
      //     bio: 'Founder of WunderGraph',
      //     time: new Date().toISOString(),
      //   };
      //   // let's fake some delay
      //   await new Promise((resolve) => setTimeout(resolve, 1000));
      // }

      const msg = []
      msg.push(({ "role": "user", "content": input.prompt }))
      const res = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          "model": "gpt-3.5-turbo",
          "messages": msg,
          stream: true
        },
        {
          headers: {
            Authorization: `Bearer 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`,
            'Content-Type': 'application/json',
          },
          responseType: 'stream', // 设为流响应类型
        }
      )
      const id = Math.floor(Math.random() * 1e10)
      const msgData = [] as any
      res.data.on('data', async function* (data: any) {
        data.toString().split('\n').filter((x: string) => x.trim()).forEach((line: string) => {
          if (line === 'data: [DONE]') {
            console.log('完球')
            //internalClient.mutations.ChatGPT__Chat__CreateOneChatMessage({ input: { equals: promptInput.chatId } })
            yield { completion: JSON.stringify({ data: msgData.join(''), id: id, finish: true }) }
          } else {
            const json = JSON.parse(line.substring(6))
            msgData.push(json.choices[0].delta.content || '')
            yield { completion: JSON.stringify({ data: msgData.join(''), id: id, finish: false }) }
          }
        })
      })
    } finally {
      console.log('client disconnected');
    }
  },
});
