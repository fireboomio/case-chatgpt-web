import { configureWunderGraphServer } from 'fireboom-wundersdk/server';
import type { HooksConfig } from './generated/fireboom.hooks';
import type { InternalClient } from './generated/fireboom.internal.client';

import chatGPT from './customize/chatGPT';

export default configureWunderGraphServer<HooksConfig, InternalClient, {}>(() => ({
    hooks: {
        global: {
            httpTransport: {
                
            }
    
        },
        authentication: {
    
    
        },
        queries: {
    

        },
        mutations: {
    

        },
    },
    graphqlServers: [
        {
            apiNamespace: "chatGPT",
            serverName: "chatGPT",
            enableGraphQLEndpoint: true,
            schema: chatGPT
        },
    ]
}));