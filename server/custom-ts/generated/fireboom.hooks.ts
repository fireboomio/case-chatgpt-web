import type { BaseRequestContext, WunderGraphRequest, WunderGraphResponse, AuthenticationResponse, AuthenticationHookRequest, HooksConfiguration, WsTransportOnConnectionInitResponse, PreUploadHookRequest, PreUploadHookResponse, PostUploadHookRequest, PostUploadHookResponse } from "fireboom-wundersdk/server";
import { Chat__CreateOneInput,InternalChat__CreateOneInput,InjectedChat__CreateOneInput,Chat__CreateOneResponse,Chat__DeleteOneInput,InternalChat__DeleteOneInput,InjectedChat__DeleteOneInput,Chat__DeleteOneResponse,Chat__GetByHistoryInput,InternalChat__GetByHistoryInput,InjectedChat__GetByHistoryInput,Chat__GetByHistoryResponse,Chat__GetListResponse,Chat__UpdateChatTextInput,InternalChat__UpdateChatTextInput,InjectedChat__UpdateChatTextInput,Chat__UpdateChatTextResponse,History__CreateOneInput,InternalHistory__CreateOneInput,InjectedHistory__CreateOneInput,History__CreateOneResponse,History__DeleteOneInput,InternalHistory__DeleteOneInput,InjectedHistory__DeleteOneInput,History__DeleteOneResponse,InternalHistory__GetListInput,InjectedHistory__GetListInput,History__GetListResponse,History__UpdateOneInput,InternalHistory__UpdateOneInput,InjectedHistory__UpdateOneInput,History__UpdateOneResponse,Propmt__CreateOneInput,InternalPropmt__CreateOneInput,InjectedPropmt__CreateOneInput,Propmt__CreateOneResponse,Propmt__DeleteManyInput,InternalPropmt__DeleteManyInput,InjectedPropmt__DeleteManyInput,Propmt__DeleteManyResponse,Propmt__DeleteOneInput,InternalPropmt__DeleteOneInput,InjectedPropmt__DeleteOneInput,Propmt__DeleteOneResponse,Propmt__GetListInput,InternalPropmt__GetListInput,InjectedPropmt__GetListInput,Propmt__GetListResponse,Propmt__UpdateOneInput,InternalPropmt__UpdateOneInput,InjectedPropmt__UpdateOneInput,Propmt__UpdateOneResponse,User__CreateOneUserInput,InternalUser__CreateOneUserInput,InjectedUser__CreateOneUserInput,User__CreateOneUserResponse,User__GetOneUserInput,InternalUser__GetOneUserInput,InjectedUser__GetOneUserInput,User__GetOneUserResponse,InternalUser__MeInput,InjectedUser__MeInput,User__MeResponse,User__UpdateInfoInput,InternalUser__UpdateInfoInput,InjectedUser__UpdateInfoInput,User__UpdateInfoResponse,Chat__ChatSSEInput,InternalChat__ChatSSEInput,Chat__ChatSSEResponse, } from "./models"
import type { InternalClient } from "./fireboom.internal.client"
import type { User } from "./claims"

// use SKIP to skip the hook and continue the request / response chain without modifying the request / response
export type SKIP = "skip";

// use CANCEL to skip the hook and cancel the request / response chain
// this is semantically equal to throwing an error (500)
export type CANCEL = "cancel";

export type WUNDERGRAPH_OPERATION ="Chat/CreateOne" | "Chat/DeleteOne" | "Chat/GetByHistory" | "Chat/GetList" | "Chat/UpdateChatText" | "History/CreateOne" | "History/DeleteOne" | "History/GetList" | "History/UpdateOne" | "Propmt/CreateOne" | "Propmt/DeleteMany" | "Propmt/DeleteOne" | "Propmt/GetList" | "Propmt/UpdateOne" | "User/CreateOneUser" | "User/GetOneUser" | "User/Me" | "User/UpdateInfo" | "Chat/ChatSSE";

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
		
				subscriptions?: Subscriptions;
        }

export interface Queries {
        "Chat/GetByHistory"?: {
        mockResolve?: (hook: HookRequestWithInput<InjectedChat__GetByHistoryInput>) => Promise<Chat__GetByHistoryResponse>;
        preResolve?: (hook: HookRequestWithInput<InjectedChat__GetByHistoryInput>) => Promise<void>;
         mutatingPreResolve?: (hook: HookRequestWithInput<InjectedChat__GetByHistoryInput>) => Promise<InjectedChat__GetByHistoryInput>;
        postResolve?: (hook: HookRequestWithInput<InjectedChat__GetByHistoryInput> & HookRequestWithResponse<Chat__GetByHistoryResponse>) => Promise<void>;
        customResolve?: (hook: HookRequestWithInput<InjectedChat__GetByHistoryInput>) => Promise<void | Chat__GetByHistoryResponse | null>;
        mutatingPostResolve?: (hook: HookRequestWithInput<InjectedChat__GetByHistoryInput> & HookRequestWithResponse<Chat__GetByHistoryResponse>) => Promise<Chat__GetByHistoryResponse>;
        }
        "Chat/GetList"?: {
        mockResolve?: (hook: HookRequest) => Promise<Chat__GetListResponse>;
        preResolve?: (hook: HookRequest) => Promise<void>;
        
        postResolve?: (hook: HookRequest & HookRequestWithResponse<Chat__GetListResponse>) => Promise<void>;
        customResolve?: (hook: HookRequest) => Promise<void | Chat__GetListResponse | null>;
        mutatingPostResolve?: (hook: HookRequest & HookRequestWithResponse<Chat__GetListResponse>) => Promise<Chat__GetListResponse>;
        }
        "History/GetList"?: {
        mockResolve?: (hook: HookRequestWithInput<InjectedHistory__GetListInput>) => Promise<History__GetListResponse>;
        preResolve?: (hook: HookRequestWithInput<InjectedHistory__GetListInput>) => Promise<void>;
         mutatingPreResolve?: (hook: HookRequestWithInput<InjectedHistory__GetListInput>) => Promise<InjectedHistory__GetListInput>;
        postResolve?: (hook: HookRequestWithInput<InjectedHistory__GetListInput> & HookRequestWithResponse<History__GetListResponse>) => Promise<void>;
        customResolve?: (hook: HookRequestWithInput<InjectedHistory__GetListInput>) => Promise<void | History__GetListResponse | null>;
        mutatingPostResolve?: (hook: HookRequestWithInput<InjectedHistory__GetListInput> & HookRequestWithResponse<History__GetListResponse>) => Promise<History__GetListResponse>;
        }
        "Propmt/GetList"?: {
        mockResolve?: (hook: HookRequestWithInput<InjectedPropmt__GetListInput>) => Promise<Propmt__GetListResponse>;
        preResolve?: (hook: HookRequestWithInput<InjectedPropmt__GetListInput>) => Promise<void>;
         mutatingPreResolve?: (hook: HookRequestWithInput<InjectedPropmt__GetListInput>) => Promise<InjectedPropmt__GetListInput>;
        postResolve?: (hook: HookRequestWithInput<InjectedPropmt__GetListInput> & HookRequestWithResponse<Propmt__GetListResponse>) => Promise<void>;
        customResolve?: (hook: HookRequestWithInput<InjectedPropmt__GetListInput>) => Promise<void | Propmt__GetListResponse | null>;
        mutatingPostResolve?: (hook: HookRequestWithInput<InjectedPropmt__GetListInput> & HookRequestWithResponse<Propmt__GetListResponse>) => Promise<Propmt__GetListResponse>;
        }
        "User/GetOneUser"?: {
        mockResolve?: (hook: HookRequestWithInput<InjectedUser__GetOneUserInput>) => Promise<User__GetOneUserResponse>;
        preResolve?: (hook: HookRequestWithInput<InjectedUser__GetOneUserInput>) => Promise<void>;
         mutatingPreResolve?: (hook: HookRequestWithInput<InjectedUser__GetOneUserInput>) => Promise<InjectedUser__GetOneUserInput>;
        postResolve?: (hook: HookRequestWithInput<InjectedUser__GetOneUserInput> & HookRequestWithResponse<User__GetOneUserResponse>) => Promise<void>;
        customResolve?: (hook: HookRequestWithInput<InjectedUser__GetOneUserInput>) => Promise<void | User__GetOneUserResponse | null>;
        mutatingPostResolve?: (hook: HookRequestWithInput<InjectedUser__GetOneUserInput> & HookRequestWithResponse<User__GetOneUserResponse>) => Promise<User__GetOneUserResponse>;
        }
        "User/Me"?: {
        mockResolve?: (hook: HookRequestWithInput<InjectedUser__MeInput>) => Promise<User__MeResponse>;
        preResolve?: (hook: HookRequestWithInput<InjectedUser__MeInput>) => Promise<void>;
         mutatingPreResolve?: (hook: HookRequestWithInput<InjectedUser__MeInput>) => Promise<InjectedUser__MeInput>;
        postResolve?: (hook: HookRequestWithInput<InjectedUser__MeInput> & HookRequestWithResponse<User__MeResponse>) => Promise<void>;
        customResolve?: (hook: HookRequestWithInput<InjectedUser__MeInput>) => Promise<void | User__MeResponse | null>;
        mutatingPostResolve?: (hook: HookRequestWithInput<InjectedUser__MeInput> & HookRequestWithResponse<User__MeResponse>) => Promise<User__MeResponse>;
        }
}

export interface Mutations {
        "Chat/CreateOne"?: {
        mockResolve?: (hook: HookRequestWithInput<InjectedChat__CreateOneInput>) => Promise<Chat__CreateOneResponse>;
        preResolve?: (hook: HookRequestWithInput<InjectedChat__CreateOneInput>) => Promise<void>;
         mutatingPreResolve?: (hook: HookRequestWithInput<InjectedChat__CreateOneInput>) => Promise<InjectedChat__CreateOneInput>;
        postResolve?: (hook: HookRequestWithInput<InjectedChat__CreateOneInput> & HookRequestWithResponse<Chat__CreateOneResponse>) => Promise<void>;
        customResolve?: (hook: HookRequestWithInput<InjectedChat__CreateOneInput>) => Promise<void | Chat__CreateOneResponse>;
        mutatingPostResolve?: (hook: HookRequestWithInput<InjectedChat__CreateOneInput> & HookRequestWithResponse<Chat__CreateOneResponse>) => Promise<Chat__CreateOneResponse>;
        }
        "Chat/DeleteOne"?: {
        mockResolve?: (hook: HookRequestWithInput<InjectedChat__DeleteOneInput>) => Promise<Chat__DeleteOneResponse>;
        preResolve?: (hook: HookRequestWithInput<InjectedChat__DeleteOneInput>) => Promise<void>;
         mutatingPreResolve?: (hook: HookRequestWithInput<InjectedChat__DeleteOneInput>) => Promise<InjectedChat__DeleteOneInput>;
        postResolve?: (hook: HookRequestWithInput<InjectedChat__DeleteOneInput> & HookRequestWithResponse<Chat__DeleteOneResponse>) => Promise<void>;
        customResolve?: (hook: HookRequestWithInput<InjectedChat__DeleteOneInput>) => Promise<void | Chat__DeleteOneResponse>;
        mutatingPostResolve?: (hook: HookRequestWithInput<InjectedChat__DeleteOneInput> & HookRequestWithResponse<Chat__DeleteOneResponse>) => Promise<Chat__DeleteOneResponse>;
        }
        "Chat/UpdateChatText"?: {
        mockResolve?: (hook: HookRequestWithInput<InjectedChat__UpdateChatTextInput>) => Promise<Chat__UpdateChatTextResponse>;
        preResolve?: (hook: HookRequestWithInput<InjectedChat__UpdateChatTextInput>) => Promise<void>;
         mutatingPreResolve?: (hook: HookRequestWithInput<InjectedChat__UpdateChatTextInput>) => Promise<InjectedChat__UpdateChatTextInput>;
        postResolve?: (hook: HookRequestWithInput<InjectedChat__UpdateChatTextInput> & HookRequestWithResponse<Chat__UpdateChatTextResponse>) => Promise<void>;
        customResolve?: (hook: HookRequestWithInput<InjectedChat__UpdateChatTextInput>) => Promise<void | Chat__UpdateChatTextResponse>;
        mutatingPostResolve?: (hook: HookRequestWithInput<InjectedChat__UpdateChatTextInput> & HookRequestWithResponse<Chat__UpdateChatTextResponse>) => Promise<Chat__UpdateChatTextResponse>;
        }
        "History/CreateOne"?: {
        mockResolve?: (hook: HookRequestWithInput<InjectedHistory__CreateOneInput>) => Promise<History__CreateOneResponse>;
        preResolve?: (hook: HookRequestWithInput<InjectedHistory__CreateOneInput>) => Promise<void>;
         mutatingPreResolve?: (hook: HookRequestWithInput<InjectedHistory__CreateOneInput>) => Promise<InjectedHistory__CreateOneInput>;
        postResolve?: (hook: HookRequestWithInput<InjectedHistory__CreateOneInput> & HookRequestWithResponse<History__CreateOneResponse>) => Promise<void>;
        customResolve?: (hook: HookRequestWithInput<InjectedHistory__CreateOneInput>) => Promise<void | History__CreateOneResponse>;
        mutatingPostResolve?: (hook: HookRequestWithInput<InjectedHistory__CreateOneInput> & HookRequestWithResponse<History__CreateOneResponse>) => Promise<History__CreateOneResponse>;
        }
        "History/DeleteOne"?: {
        mockResolve?: (hook: HookRequestWithInput<InjectedHistory__DeleteOneInput>) => Promise<History__DeleteOneResponse>;
        preResolve?: (hook: HookRequestWithInput<InjectedHistory__DeleteOneInput>) => Promise<void>;
         mutatingPreResolve?: (hook: HookRequestWithInput<InjectedHistory__DeleteOneInput>) => Promise<InjectedHistory__DeleteOneInput>;
        postResolve?: (hook: HookRequestWithInput<InjectedHistory__DeleteOneInput> & HookRequestWithResponse<History__DeleteOneResponse>) => Promise<void>;
        customResolve?: (hook: HookRequestWithInput<InjectedHistory__DeleteOneInput>) => Promise<void | History__DeleteOneResponse>;
        mutatingPostResolve?: (hook: HookRequestWithInput<InjectedHistory__DeleteOneInput> & HookRequestWithResponse<History__DeleteOneResponse>) => Promise<History__DeleteOneResponse>;
        }
        "History/UpdateOne"?: {
        mockResolve?: (hook: HookRequestWithInput<InjectedHistory__UpdateOneInput>) => Promise<History__UpdateOneResponse>;
        preResolve?: (hook: HookRequestWithInput<InjectedHistory__UpdateOneInput>) => Promise<void>;
         mutatingPreResolve?: (hook: HookRequestWithInput<InjectedHistory__UpdateOneInput>) => Promise<InjectedHistory__UpdateOneInput>;
        postResolve?: (hook: HookRequestWithInput<InjectedHistory__UpdateOneInput> & HookRequestWithResponse<History__UpdateOneResponse>) => Promise<void>;
        customResolve?: (hook: HookRequestWithInput<InjectedHistory__UpdateOneInput>) => Promise<void | History__UpdateOneResponse>;
        mutatingPostResolve?: (hook: HookRequestWithInput<InjectedHistory__UpdateOneInput> & HookRequestWithResponse<History__UpdateOneResponse>) => Promise<History__UpdateOneResponse>;
        }
        "Propmt/CreateOne"?: {
        mockResolve?: (hook: HookRequestWithInput<InjectedPropmt__CreateOneInput>) => Promise<Propmt__CreateOneResponse>;
        preResolve?: (hook: HookRequestWithInput<InjectedPropmt__CreateOneInput>) => Promise<void>;
         mutatingPreResolve?: (hook: HookRequestWithInput<InjectedPropmt__CreateOneInput>) => Promise<InjectedPropmt__CreateOneInput>;
        postResolve?: (hook: HookRequestWithInput<InjectedPropmt__CreateOneInput> & HookRequestWithResponse<Propmt__CreateOneResponse>) => Promise<void>;
        customResolve?: (hook: HookRequestWithInput<InjectedPropmt__CreateOneInput>) => Promise<void | Propmt__CreateOneResponse>;
        mutatingPostResolve?: (hook: HookRequestWithInput<InjectedPropmt__CreateOneInput> & HookRequestWithResponse<Propmt__CreateOneResponse>) => Promise<Propmt__CreateOneResponse>;
        }
        "Propmt/DeleteMany"?: {
        mockResolve?: (hook: HookRequestWithInput<InjectedPropmt__DeleteManyInput>) => Promise<Propmt__DeleteManyResponse>;
        preResolve?: (hook: HookRequestWithInput<InjectedPropmt__DeleteManyInput>) => Promise<void>;
         mutatingPreResolve?: (hook: HookRequestWithInput<InjectedPropmt__DeleteManyInput>) => Promise<InjectedPropmt__DeleteManyInput>;
        postResolve?: (hook: HookRequestWithInput<InjectedPropmt__DeleteManyInput> & HookRequestWithResponse<Propmt__DeleteManyResponse>) => Promise<void>;
        customResolve?: (hook: HookRequestWithInput<InjectedPropmt__DeleteManyInput>) => Promise<void | Propmt__DeleteManyResponse>;
        mutatingPostResolve?: (hook: HookRequestWithInput<InjectedPropmt__DeleteManyInput> & HookRequestWithResponse<Propmt__DeleteManyResponse>) => Promise<Propmt__DeleteManyResponse>;
        }
        "Propmt/DeleteOne"?: {
        mockResolve?: (hook: HookRequestWithInput<InjectedPropmt__DeleteOneInput>) => Promise<Propmt__DeleteOneResponse>;
        preResolve?: (hook: HookRequestWithInput<InjectedPropmt__DeleteOneInput>) => Promise<void>;
         mutatingPreResolve?: (hook: HookRequestWithInput<InjectedPropmt__DeleteOneInput>) => Promise<InjectedPropmt__DeleteOneInput>;
        postResolve?: (hook: HookRequestWithInput<InjectedPropmt__DeleteOneInput> & HookRequestWithResponse<Propmt__DeleteOneResponse>) => Promise<void>;
        customResolve?: (hook: HookRequestWithInput<InjectedPropmt__DeleteOneInput>) => Promise<void | Propmt__DeleteOneResponse>;
        mutatingPostResolve?: (hook: HookRequestWithInput<InjectedPropmt__DeleteOneInput> & HookRequestWithResponse<Propmt__DeleteOneResponse>) => Promise<Propmt__DeleteOneResponse>;
        }
        "Propmt/UpdateOne"?: {
        mockResolve?: (hook: HookRequestWithInput<InjectedPropmt__UpdateOneInput>) => Promise<Propmt__UpdateOneResponse>;
        preResolve?: (hook: HookRequestWithInput<InjectedPropmt__UpdateOneInput>) => Promise<void>;
         mutatingPreResolve?: (hook: HookRequestWithInput<InjectedPropmt__UpdateOneInput>) => Promise<InjectedPropmt__UpdateOneInput>;
        postResolve?: (hook: HookRequestWithInput<InjectedPropmt__UpdateOneInput> & HookRequestWithResponse<Propmt__UpdateOneResponse>) => Promise<void>;
        customResolve?: (hook: HookRequestWithInput<InjectedPropmt__UpdateOneInput>) => Promise<void | Propmt__UpdateOneResponse>;
        mutatingPostResolve?: (hook: HookRequestWithInput<InjectedPropmt__UpdateOneInput> & HookRequestWithResponse<Propmt__UpdateOneResponse>) => Promise<Propmt__UpdateOneResponse>;
        }
        "User/CreateOneUser"?: {
        mockResolve?: (hook: HookRequestWithInput<InjectedUser__CreateOneUserInput>) => Promise<User__CreateOneUserResponse>;
        preResolve?: (hook: HookRequestWithInput<InjectedUser__CreateOneUserInput>) => Promise<void>;
         mutatingPreResolve?: (hook: HookRequestWithInput<InjectedUser__CreateOneUserInput>) => Promise<InjectedUser__CreateOneUserInput>;
        postResolve?: (hook: HookRequestWithInput<InjectedUser__CreateOneUserInput> & HookRequestWithResponse<User__CreateOneUserResponse>) => Promise<void>;
        customResolve?: (hook: HookRequestWithInput<InjectedUser__CreateOneUserInput>) => Promise<void | User__CreateOneUserResponse>;
        mutatingPostResolve?: (hook: HookRequestWithInput<InjectedUser__CreateOneUserInput> & HookRequestWithResponse<User__CreateOneUserResponse>) => Promise<User__CreateOneUserResponse>;
        }
        "User/UpdateInfo"?: {
        mockResolve?: (hook: HookRequestWithInput<InjectedUser__UpdateInfoInput>) => Promise<User__UpdateInfoResponse>;
        preResolve?: (hook: HookRequestWithInput<InjectedUser__UpdateInfoInput>) => Promise<void>;
         mutatingPreResolve?: (hook: HookRequestWithInput<InjectedUser__UpdateInfoInput>) => Promise<InjectedUser__UpdateInfoInput>;
        postResolve?: (hook: HookRequestWithInput<InjectedUser__UpdateInfoInput> & HookRequestWithResponse<User__UpdateInfoResponse>) => Promise<void>;
        customResolve?: (hook: HookRequestWithInput<InjectedUser__UpdateInfoInput>) => Promise<void | User__UpdateInfoResponse>;
        mutatingPostResolve?: (hook: HookRequestWithInput<InjectedUser__UpdateInfoInput> & HookRequestWithResponse<User__UpdateInfoResponse>) => Promise<User__UpdateInfoResponse>;
        }
}

export interface Subscriptions {
        "Chat/ChatSSE"?: {
        preResolve?: (hook: HookRequestWithInput<InjectedChat__ChatSSEInput>) => Promise<void>;
         mutatingPreResolve?: (hook: HookRequestWithInput<InjectedChat__ChatSSEInput>) => Promise<InjectedChat__ChatSSEInput>;
        postResolve?: (hook: HookRequestWithInput<InjectedChat__ChatSSEInput> & HookRequestWithResponse<Chat__ChatSSEResponse>) => Promise<void>;
        mutatingPostResolve?: (hook: HookRequestWithInput<InjectedChat__ChatSSEInput> & HookRequestWithResponse<Chat__ChatSSEResponse>) => Promise<Chat__ChatSSEResponse>;
        }
}

export interface Uploads {
}