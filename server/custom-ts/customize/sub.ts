import { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInputObjectType } from 'graphql';
import { PubSub } from 'graphql-subscriptions';
import { FastifyBaseLogger } from 'fastify/types/logger';
import { InternalClient } from 'fireboom-wundersdk/server';
import { Mutations, Queries } from 'generated/fireboom.internal.client';
import axios, { AxiosResponse } from 'axios';

const pubsub = new PubSub();

const PromptInput = new GraphQLInputObjectType({
  name: 'PromptInput',
  fields: () => ({
    prompt: { type: GraphQLString },
    parentMessageId: { type: GraphQLString }
  })
});

const Subscription = new GraphQLObjectType({
  name: 'Subscription',
  description: 'OpenAI API proxy',
  fields: () => {
    return {
      completion: {
        type: GraphQLString,
        args: {
          promptInput: { type: PromptInput }
        },
        resolve: async ({}, { promptInput }, context) => {
          const channel = 'openai';
          console.log(promptInput);
          // Construct the OpenAI request payload
          const payload = {
            prompt: `${promptInput.prompt}\n\n${context.messages}`,
            temperature: 0.5,
            max_tokens: 50
          };

          // Call the OpenAI API to generate a response
          const response: AxiosResponse = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
            prompt: payload.prompt,
            max_tokens: payload.max_tokens,
            temperature: payload.temperature,
            stream: true
          }, {
            headers: {
              'Authorization': `Bearer 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`,
              'Content-Type': 'application/json'
            }
          });

          // Return the async iterator for the subscription
          return {
            [Symbol.asyncIterator]: () => ({
              async next() {
                const chunk = await new Promise(resolve => response.data.once('data', resolve));
                const text = (chunk as Buffer).toString(); // Add type assertion here
                pubsub.publish(channel, { completion: text });
                return { done: false, value: text };
              },
              async return() {
                response.data.destroy();
                return { done: true, value: null };
              },
              [Symbol.asyncIterator]() {
                return this;
              },
            }),
          };
        },
         subscribe: (parent, args, { pubsub2 }) => {
          console.log("pubsub->", pubsub)
          return pubsub.asyncIterator('openai')
        },
      }
    };
  }
});

// Define the GraphQL schema
const schema = new GraphQLSchema({
  subscription: Subscription,
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
