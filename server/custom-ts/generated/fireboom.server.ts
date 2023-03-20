import type { GraphQLServerConfig, BaseRequestContext, WunderGraphUser } from "fireboom-wundersdk/server";
import type { HooksConfig } from "./fireboom.hooks";
import type { InternalClient } from './fireboom.internal.client'
import type { User } from './claims'

export interface Config {
    hooks: HooksConfig;
    graphqlServers?: Omit<GraphQLServerConfig, 'routeUrl'>[];
}

export interface OutputConfig {
    hooks: HooksConfig;
    graphqlServers?: (GraphQLServerConfig & { url: string })[];
}

export interface GraphQLExecutionContext {
    wundergraph: BaseRequestContext<User, InternalClient>;
}