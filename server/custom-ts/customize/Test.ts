import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql'
import { FastifyBaseLogger } from 'fastify/types/logger'
import { InternalClient } from 'fireboom-wundersdk/server'
import { Mutations, Queries } from 'generated/fireboom.internal.client';

export default new GraphQLSchema({
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
          return 'world123'
        },
      },
    },
  }),
})