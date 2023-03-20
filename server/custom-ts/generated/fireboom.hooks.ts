import type { BaseRequestContext, WunderGraphRequest, WunderGraphResponse, AuthenticationResponse, AuthenticationHookRequest, HooksConfiguration, WsTransportOnConnectionInitResponse, PreUploadHookRequest, PreUploadHookResponse, PostUploadHookRequest, PostUploadHookResponse } from "fireboom-wundersdk/server";
import { ChatGPT__Chat__CreateOneChatMessageInput,InternalChatGPT__Chat__CreateOneChatMessageInput,InjectedChatGPT__Chat__CreateOneChatMessageInput,ChatGPT__Chat__CreateOneChatMessageResponse,ChatGPT__Chat__CreateOneHistoryInput,InternalChatGPT__Chat__CreateOneHistoryInput,InjectedChatGPT__Chat__CreateOneHistoryInput,ChatGPT__Chat__CreateOneHistoryResponse,ChatGPT__Chat__DeleteOneChatMessageInput,InternalChatGPT__Chat__DeleteOneChatMessageInput,InjectedChatGPT__Chat__DeleteOneChatMessageInput,ChatGPT__Chat__DeleteOneChatMessageResponse,ChatGPT__Chat__DeleteOneHistoryInput,InternalChatGPT__Chat__DeleteOneHistoryInput,InjectedChatGPT__Chat__DeleteOneHistoryInput,ChatGPT__Chat__DeleteOneHistoryResponse,ChatGPT__Chat__GetHistoryListInput,InternalChatGPT__Chat__GetHistoryListInput,InjectedChatGPT__Chat__GetHistoryListInput,ChatGPT__Chat__GetHistoryListResponse,ChatGPT__Chat__GetManyChatMessageResponse,ChatGPT__Chat__UpdateOneHistoryInput,InternalChatGPT__Chat__UpdateOneHistoryInput,InjectedChatGPT__Chat__UpdateOneHistoryInput,ChatGPT__Chat__UpdateOneHistoryResponse,ChatGPT__Propmt__CreateOnePromptInput,InternalChatGPT__Propmt__CreateOnePromptInput,InjectedChatGPT__Propmt__CreateOnePromptInput,ChatGPT__Propmt__CreateOnePromptResponse,ChatGPT__Propmt__DeleteManyPromptInput,InternalChatGPT__Propmt__DeleteManyPromptInput,InjectedChatGPT__Propmt__DeleteManyPromptInput,ChatGPT__Propmt__DeleteManyPromptResponse,ChatGPT__Propmt__DeleteOnePromptInput,InternalChatGPT__Propmt__DeleteOnePromptInput,InjectedChatGPT__Propmt__DeleteOnePromptInput,ChatGPT__Propmt__DeleteOnePromptResponse,ChatGPT__Propmt__GetPromptListInput,InternalChatGPT__Propmt__GetPromptListInput,InjectedChatGPT__Propmt__GetPromptListInput,ChatGPT__Propmt__GetPromptListResponse,ChatGPT__Propmt__UpdateOnePromptInput,InternalChatGPT__Propmt__UpdateOnePromptInput,InjectedChatGPT__Propmt__UpdateOnePromptInput,ChatGPT__Propmt__UpdateOnePromptResponse, } from "./models"
import type { InternalClient } from "./fireboom.internal.client"
import type { User } from "./claims"

// use SKIP to skip the hook and continue the request / response chain without modifying the request / response
export type SKIP = "skip";

// use CANCEL to skip the hook and cancel the request / response chain
// this is semantically equal to throwing an error (500)
export type CANCEL = "cancel";

export type WUNDERGRAPH_OPERATION ="ChatGPT/Chat/CreateOneChatMessage" | "ChatGPT/Chat/CreateOneHistory" | "ChatGPT/Chat/DeleteOneChatMessage" | "ChatGPT/Chat/DeleteOneHistory" | "ChatGPT/Chat/GetHistoryList" | "ChatGPT/Chat/GetManyChatMessage" | "ChatGPT/Chat/UpdateOneHistory" | "ChatGPT/Propmt/CreateOnePrompt" | "ChatGPT/Propmt/DeleteManyPrompt" | "ChatGPT/Propmt/DeleteOnePrompt" | "ChatGPT/Propmt/GetPromptList" | "ChatGPT/Propmt/UpdateOnePrompt";

export type DATA_SOURCES =never;

export interface HttpTransportHookRequest extends BaseRequestContext<User, InternalClient> {
		request: WunderGraphRequest;
		operation: {
				name: WUNDERGRAPH_OPERATION;
				type: 'mutation' | 'query' | 'subscription';
		}
}
export interface HttpTransportHookRequestWithResponse extends BaseRequestContext<User, InternalClient> {
		response: WunderGraphResponse;
    operation: {
        name: string;
        type: string;
    }
}
export interface WsTransportHookRequest extends BaseRequestContext<User, InternalClient> {
	  dataSourceId: DATA_SOURCES;
		request: WunderGraphRequest;
}
export interface GlobalHooksConfig {
    httpTransport?: {
        // onRequest is called right before the request is sent to the origin
        // it can be used to modify the request
        // you can return SKIP to skip the hook and continue the request chain without modifying the request
        // you can return CANCEL to cancel the request chain and return a 500 error
        onOriginRequest?: {
            hook: (hook: HttpTransportHookRequest) => Promise<WunderGraphRequest | SKIP | CANCEL>;
            // calling the httpTransport hooks has a case, because the custom httpTransport hooks have to be called for each request
            // for this reason, you have to explicitly enable the hook for each Operation
            enableForOperations?: WUNDERGRAPH_OPERATION[];
            // enableForAllOperations will disregard the enableForOperations property and enable the hook for all operations
            enableForAllOperations?: boolean;
        };
        // onResponse is called right after the response is received from the origin
        // it can be used to modify the response
        // you can return SKIP to skip the hook and continue the response chain without modifying the response
        // you can return CANCEL to cancel the response chain and return a 500 error
        onOriginResponse?: {
            hook: (hook: HttpTransportHookRequestWithResponse) => Promise<WunderGraphResponse | SKIP | CANCEL>;
            // calling the httpTransport hooks has a case, because the custom httpTransport hooks have to be called for each request
            // for this reason, you have to explicitly enable the hook for each Operation
            enableForOperations?: WUNDERGRAPH_OPERATION[];
            // enableForAllOperations will disregard the enableForOperations property and enable the hook for all operations
            enableForAllOperations?: boolean;
        };
    },
    wsTransport?: {
        // onConnectionInit is used to populate 'connection_init' message payload with custom data
        // it can be used to authenticate the websocket connection
        onConnectionInit?: {
            hook: (hook: WsTransportHookRequest) => Promise<WsTransportOnConnectionInitResponse>;
            /**
             * enableForDataSources will enable the hook for specific data sources.
             * you should provide a list of data sources ids
             * an id is the identifier of the data source in the wundergraph.config.ts file
             * @example
             *const chat = introspect.graphql({
             *	id: 'chatId',
						 *	apiNamespace: 'chat',
						 *	url: 'http://localhost:8085/query',
						 *});
             */
       	    enableForDataSources: DATA_SOURCES[];
        }
    }
}

export interface HookRequest extends BaseRequestContext<User, InternalClient> {}

export interface HookRequestWithResponse<Response> extends HookRequest {
		response: Response;
}

export interface HookRequestWithInput<Input> extends HookRequest {
		input: Input;
}

export interface HooksConfig extends HooksConfiguration<Queries, Mutations, Subscriptions, Uploads, User, InternalClient> {
    global?: GlobalHooksConfig;
    authentication?: {
        postAuthentication?: (hook: AuthenticationHookRequest<User, InternalClient>) => Promise<void>;
        mutatingPostAuthentication?: (hook: AuthenticationHookRequest<User, InternalClient>) => Promise<AuthenticationResponse<User>>;
        revalidate?: (hook: AuthenticationHookRequest<User, InternalClient>) => Promise<AuthenticationResponse<User>>;
        postLogout?: (hook: AuthenticationHookRequest<User, InternalClient>) => Promise<void>;
    };
				queries?: Queries;
		
				mutations?: Mutations;
		        }

export interface Queries {
        "ChatGPT/Chat/GetHistoryList"?: {
        mockResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__GetHistoryListInput>) => Promise<ChatGPT__Chat__GetHistoryListResponse>;
        preResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__GetHistoryListInput>) => Promise<void>;
         mutatingPreResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__GetHistoryListInput>) => Promise<InjectedChatGPT__Chat__GetHistoryListInput>;
        postResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__GetHistoryListInput> & HookRequestWithResponse<ChatGPT__Chat__GetHistoryListResponse>) => Promise<void>;
        customResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__GetHistoryListInput>) => Promise<void | ChatGPT__Chat__GetHistoryListResponse | null>;
        mutatingPostResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__GetHistoryListInput> & HookRequestWithResponse<ChatGPT__Chat__GetHistoryListResponse>) => Promise<ChatGPT__Chat__GetHistoryListResponse>;
        }
        "ChatGPT/Chat/GetManyChatMessage"?: {
        mockResolve?: (hook: HookRequest) => Promise<ChatGPT__Chat__GetManyChatMessageResponse>;
        preResolve?: (hook: HookRequest) => Promise<void>;
        
        postResolve?: (hook: HookRequest & HookRequestWithResponse<ChatGPT__Chat__GetManyChatMessageResponse>) => Promise<void>;
        customResolve?: (hook: HookRequest) => Promise<void | ChatGPT__Chat__GetManyChatMessageResponse | null>;
        mutatingPostResolve?: (hook: HookRequest & HookRequestWithResponse<ChatGPT__Chat__GetManyChatMessageResponse>) => Promise<ChatGPT__Chat__GetManyChatMessageResponse>;
        }
        "ChatGPT/Propmt/GetPromptList"?: {
        mockResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Propmt__GetPromptListInput>) => Promise<ChatGPT__Propmt__GetPromptListResponse>;
        preResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Propmt__GetPromptListInput>) => Promise<void>;
         mutatingPreResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Propmt__GetPromptListInput>) => Promise<InjectedChatGPT__Propmt__GetPromptListInput>;
        postResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Propmt__GetPromptListInput> & HookRequestWithResponse<ChatGPT__Propmt__GetPromptListResponse>) => Promise<void>;
        customResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Propmt__GetPromptListInput>) => Promise<void | ChatGPT__Propmt__GetPromptListResponse | null>;
        mutatingPostResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Propmt__GetPromptListInput> & HookRequestWithResponse<ChatGPT__Propmt__GetPromptListResponse>) => Promise<ChatGPT__Propmt__GetPromptListResponse>;
        }
}

export interface Mutations {
        "ChatGPT/Chat/CreateOneChatMessage"?: {
        mockResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__CreateOneChatMessageInput>) => Promise<ChatGPT__Chat__CreateOneChatMessageResponse>;
        preResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__CreateOneChatMessageInput>) => Promise<void>;
         mutatingPreResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__CreateOneChatMessageInput>) => Promise<InjectedChatGPT__Chat__CreateOneChatMessageInput>;
        postResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__CreateOneChatMessageInput> & HookRequestWithResponse<ChatGPT__Chat__CreateOneChatMessageResponse>) => Promise<void>;
        customResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__CreateOneChatMessageInput>) => Promise<void | ChatGPT__Chat__CreateOneChatMessageResponse>;
        mutatingPostResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__CreateOneChatMessageInput> & HookRequestWithResponse<ChatGPT__Chat__CreateOneChatMessageResponse>) => Promise<ChatGPT__Chat__CreateOneChatMessageResponse>;
        }
        "ChatGPT/Chat/CreateOneHistory"?: {
        mockResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__CreateOneHistoryInput>) => Promise<ChatGPT__Chat__CreateOneHistoryResponse>;
        preResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__CreateOneHistoryInput>) => Promise<void>;
         mutatingPreResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__CreateOneHistoryInput>) => Promise<InjectedChatGPT__Chat__CreateOneHistoryInput>;
        postResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__CreateOneHistoryInput> & HookRequestWithResponse<ChatGPT__Chat__CreateOneHistoryResponse>) => Promise<void>;
        customResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__CreateOneHistoryInput>) => Promise<void | ChatGPT__Chat__CreateOneHistoryResponse>;
        mutatingPostResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__CreateOneHistoryInput> & HookRequestWithResponse<ChatGPT__Chat__CreateOneHistoryResponse>) => Promise<ChatGPT__Chat__CreateOneHistoryResponse>;
        }
        "ChatGPT/Chat/DeleteOneChatMessage"?: {
        mockResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__DeleteOneChatMessageInput>) => Promise<ChatGPT__Chat__DeleteOneChatMessageResponse>;
        preResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__DeleteOneChatMessageInput>) => Promise<void>;
         mutatingPreResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__DeleteOneChatMessageInput>) => Promise<InjectedChatGPT__Chat__DeleteOneChatMessageInput>;
        postResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__DeleteOneChatMessageInput> & HookRequestWithResponse<ChatGPT__Chat__DeleteOneChatMessageResponse>) => Promise<void>;
        customResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__DeleteOneChatMessageInput>) => Promise<void | ChatGPT__Chat__DeleteOneChatMessageResponse>;
        mutatingPostResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__DeleteOneChatMessageInput> & HookRequestWithResponse<ChatGPT__Chat__DeleteOneChatMessageResponse>) => Promise<ChatGPT__Chat__DeleteOneChatMessageResponse>;
        }
        "ChatGPT/Chat/DeleteOneHistory"?: {
        mockResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__DeleteOneHistoryInput>) => Promise<ChatGPT__Chat__DeleteOneHistoryResponse>;
        preResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__DeleteOneHistoryInput>) => Promise<void>;
         mutatingPreResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__DeleteOneHistoryInput>) => Promise<InjectedChatGPT__Chat__DeleteOneHistoryInput>;
        postResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__DeleteOneHistoryInput> & HookRequestWithResponse<ChatGPT__Chat__DeleteOneHistoryResponse>) => Promise<void>;
        customResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__DeleteOneHistoryInput>) => Promise<void | ChatGPT__Chat__DeleteOneHistoryResponse>;
        mutatingPostResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__DeleteOneHistoryInput> & HookRequestWithResponse<ChatGPT__Chat__DeleteOneHistoryResponse>) => Promise<ChatGPT__Chat__DeleteOneHistoryResponse>;
        }
        "ChatGPT/Chat/UpdateOneHistory"?: {
        mockResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__UpdateOneHistoryInput>) => Promise<ChatGPT__Chat__UpdateOneHistoryResponse>;
        preResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__UpdateOneHistoryInput>) => Promise<void>;
         mutatingPreResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__UpdateOneHistoryInput>) => Promise<InjectedChatGPT__Chat__UpdateOneHistoryInput>;
        postResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__UpdateOneHistoryInput> & HookRequestWithResponse<ChatGPT__Chat__UpdateOneHistoryResponse>) => Promise<void>;
        customResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__UpdateOneHistoryInput>) => Promise<void | ChatGPT__Chat__UpdateOneHistoryResponse>;
        mutatingPostResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Chat__UpdateOneHistoryInput> & HookRequestWithResponse<ChatGPT__Chat__UpdateOneHistoryResponse>) => Promise<ChatGPT__Chat__UpdateOneHistoryResponse>;
        }
        "ChatGPT/Propmt/CreateOnePrompt"?: {
        mockResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Propmt__CreateOnePromptInput>) => Promise<ChatGPT__Propmt__CreateOnePromptResponse>;
        preResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Propmt__CreateOnePromptInput>) => Promise<void>;
         mutatingPreResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Propmt__CreateOnePromptInput>) => Promise<InjectedChatGPT__Propmt__CreateOnePromptInput>;
        postResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Propmt__CreateOnePromptInput> & HookRequestWithResponse<ChatGPT__Propmt__CreateOnePromptResponse>) => Promise<void>;
        customResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Propmt__CreateOnePromptInput>) => Promise<void | ChatGPT__Propmt__CreateOnePromptResponse>;
        mutatingPostResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Propmt__CreateOnePromptInput> & HookRequestWithResponse<ChatGPT__Propmt__CreateOnePromptResponse>) => Promise<ChatGPT__Propmt__CreateOnePromptResponse>;
        }
        "ChatGPT/Propmt/DeleteManyPrompt"?: {
        mockResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Propmt__DeleteManyPromptInput>) => Promise<ChatGPT__Propmt__DeleteManyPromptResponse>;
        preResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Propmt__DeleteManyPromptInput>) => Promise<void>;
         mutatingPreResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Propmt__DeleteManyPromptInput>) => Promise<InjectedChatGPT__Propmt__DeleteManyPromptInput>;
        postResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Propmt__DeleteManyPromptInput> & HookRequestWithResponse<ChatGPT__Propmt__DeleteManyPromptResponse>) => Promise<void>;
        customResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Propmt__DeleteManyPromptInput>) => Promise<void | ChatGPT__Propmt__DeleteManyPromptResponse>;
        mutatingPostResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Propmt__DeleteManyPromptInput> & HookRequestWithResponse<ChatGPT__Propmt__DeleteManyPromptResponse>) => Promise<ChatGPT__Propmt__DeleteManyPromptResponse>;
        }
        "ChatGPT/Propmt/DeleteOnePrompt"?: {
        mockResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Propmt__DeleteOnePromptInput>) => Promise<ChatGPT__Propmt__DeleteOnePromptResponse>;
        preResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Propmt__DeleteOnePromptInput>) => Promise<void>;
         mutatingPreResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Propmt__DeleteOnePromptInput>) => Promise<InjectedChatGPT__Propmt__DeleteOnePromptInput>;
        postResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Propmt__DeleteOnePromptInput> & HookRequestWithResponse<ChatGPT__Propmt__DeleteOnePromptResponse>) => Promise<void>;
        customResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Propmt__DeleteOnePromptInput>) => Promise<void | ChatGPT__Propmt__DeleteOnePromptResponse>;
        mutatingPostResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Propmt__DeleteOnePromptInput> & HookRequestWithResponse<ChatGPT__Propmt__DeleteOnePromptResponse>) => Promise<ChatGPT__Propmt__DeleteOnePromptResponse>;
        }
        "ChatGPT/Propmt/UpdateOnePrompt"?: {
        mockResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Propmt__UpdateOnePromptInput>) => Promise<ChatGPT__Propmt__UpdateOnePromptResponse>;
        preResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Propmt__UpdateOnePromptInput>) => Promise<void>;
         mutatingPreResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Propmt__UpdateOnePromptInput>) => Promise<InjectedChatGPT__Propmt__UpdateOnePromptInput>;
        postResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Propmt__UpdateOnePromptInput> & HookRequestWithResponse<ChatGPT__Propmt__UpdateOnePromptResponse>) => Promise<void>;
        customResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Propmt__UpdateOnePromptInput>) => Promise<void | ChatGPT__Propmt__UpdateOnePromptResponse>;
        mutatingPostResolve?: (hook: HookRequestWithInput<InjectedChatGPT__Propmt__UpdateOnePromptInput> & HookRequestWithResponse<ChatGPT__Propmt__UpdateOnePromptResponse>) => Promise<ChatGPT__Propmt__UpdateOnePromptResponse>;
        }
}

export interface Subscriptions {
}

export interface Uploads {
}