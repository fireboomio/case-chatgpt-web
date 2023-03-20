import { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInt, GraphQLInputObjectType } from 'graphql'
import { PubSub } from 'graphql-subscriptions';
import { FastifyBaseLogger } from 'fastify/types/logger'
import { InternalClient } from 'fireboom-wundersdk/server'
import { Mutations, Queries } from 'generated/fireboom.internal.client';
import axios from 'axios';

const PromptInput = new GraphQLInputObjectType({
    name: 'PromptInput',
    fields: () => ({
        prompt: { type: GraphQLString },
        chatId: { type: GraphQLInt },
        regenId: { type: GraphQLInt }
    })
});

const OpenAI = new GraphQLObjectType({
    name: 'OpenAI',
    description: 'OpenAI API proxy',
    fields: () => {
        return {
            completion: {
                type: GraphQLString,
                args: {
                    promptInput: { type: PromptInput }
                },
                subscribe: async ({ }, { promptInput }, ctx) => {
                    const pubsub = new PubSub();
                    const channel = String(Date.now());
                    console.log(promptInput)
                    const { log, internalClient } = ctx.wundergraph

                    try {
                        //const getMsgRes = await internalClient.queries.ChatGPT__Chat__GetManyChatMessage({ input: { equals: promptInput.chatId } })
                        //const msg = getMsgRes.data.data.map((x: { text: any, parentMessageId: any }) => ({ content: x.text, role: (x.parentMessageId ? "assistant" : "user") }))
                        const msg = []
                        msg.push(({ "role": "user", "content": promptInput.prompt }))
                        axios.post(
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
                        ).then(res => {
                            const id = Math.floor(Math.random() * 1e10)
                            const msgData = [] as any
                            res.data.on('data', (data: any) => {
                                data.toString().split('\n').filter((x: string) => x.trim()).forEach((line: string) => {
                                    if (line === 'data: [DONE]') {
                                        console.log('完球')
                                        //internalClient.mutations.ChatGPT__Chat__CreateOneChatMessage({ input: { equals: promptInput.chatId } })
                                        pubsub.publish(channel, {completion: JSON.stringify({ data: msgData.join(''), id: id, finish: true })})
                                    } else {
                                        const json = JSON.parse(line.substring(6))
                                        msgData.push(json.choices[0].delta.content || '')
                                        pubsub.publish(channel, {completion: JSON.stringify({ data: msgData.join(''), id: id, finish: false })})
                                    }
                                })
                            })
                        }).catch(err => {
                            console.log(err)
                        })

                    } catch (e) {
                        console.error(e)
                    }

                    // Return the initial completion message to the client
                    return pubsub.asyncIterator(channel)
                }
            }
        };
    }
});
// Define the GraphQL schema
const schema = new GraphQLSchema({
    subscription: OpenAI,
    query: new GraphQLObjectType<any, {
        wundergraph: {
            log: FastifyBaseLogger,
            internalClient: InternalClient<Queries, Mutations>
        }
    }>({
        name: 'Query',
        fields: {
            hello: {
                type: GraphQLString,
                resolve() {
                    return 'world'
                },
            },
        },
    }
    ),
});

export default schema;
