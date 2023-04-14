import { configureWunderGraphServer } from 'fireboom-wundersdk/server';
import type { HooksConfig } from './generated/fireboom.hooks';
import type { InternalClient } from './generated/fireboom.internal.client';

import postAuthentication from './auth/postAuthentication';

export default configureWunderGraphServer<HooksConfig, InternalClient, {}>(() => ({
    hooks: {
        global: {
            httpTransport: {
                
            }
    
        },
        authentication: {
    
            postAuthentication,
    
        },
        queries: {
    

        },
        mutations: {
    

        },
        subscriptions: {
    
        },
        uploads: {

        },
    },
    graphqlServers: [
    ]
}));