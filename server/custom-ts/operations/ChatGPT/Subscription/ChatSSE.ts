import fetch from '@web-std/fetch';
// import axios from 'axios'
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
    chatId: z.optional(z.string()),
    regenerateId: z.optional(z.string())
  }),
  handler: async function* ({ input }) {
    try {
      const msg = []
      msg.push(({ role: "user", content: input.prompt }))
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + process.env.OPENAI_KEY
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: msg,
          stream: true
        })
      })
      const id = Math.random().toString(36).substring(2)
      if (res.ok) {
        const reader = res.body!.getReader();
        for await (const chunk of readChunks(reader)) {
          const str = chunk.toString()
          const lines = str.split('\n').map(line => line.substring(6)).filter(Boolean)
          for (const line of lines) {
            if (line !== '[DONE]') {
              const json = JSON.parse(line)
              if (json.choices.length > 0) {
                const delta = json.choices[0].delta
                if (delta.content) {
                  yield { completion: delta.content, id: id, finish: false }
                }
              }
            } else {
              yield { completion: '', id: id, finish: true }
            }
          }
        }
      } else {
        yield { error: res.statusText }
      }
    } finally {
      console.log('client disconnected');
    }
  },
});
