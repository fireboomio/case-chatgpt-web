// @ts-nocheck
import {
	Client,
	ClientConfig,
	CreateClientConfig,
	User,
	UploadRequestOptions,
	UploadRequestOptionsWithProfile,
	OperationMetadata,
	OperationsDefinition,
	OperationRequestOptions,
	SubscriptionRequestOptions,
	SubscriptionEventHandler,
	FetchUserRequestOptions
	// UploadValidationOptions
} from "fireboom-wundersdk/client";

import type { CustomClaims, Role } from './claims'
import type { Chat__CreateOneInput,Chat__CreateOneResponse,            Chat__CreateOneResponseData,Chat__DeleteOneInput,Chat__DeleteOneResponse,            Chat__DeleteOneResponseData,Chat__GetByHistoryInput,Chat__GetByHistoryResponse,            Chat__GetByHistoryResponseData,Chat__GetMyHistoryChatsInput,Chat__GetMyHistoryChatsResponse,            Chat__GetMyHistoryChatsResponseData,Chat__UpdateChatTextInput,Chat__UpdateChatTextResponse,            Chat__UpdateChatTextResponseData,History__CreateOneInput,History__CreateOneResponse,            History__CreateOneResponseData,History__DeleteOneInput,History__DeleteOneResponse,            History__DeleteOneResponseData,History__GetListResponse,            History__GetListResponseData,History__UpdateOneInput,History__UpdateOneResponse,            History__UpdateOneResponseData,Propmt__CreateOneInput,Propmt__CreateOneResponse,            Propmt__CreateOneResponseData,Propmt__DeleteManyInput,Propmt__DeleteManyResponse,            Propmt__DeleteManyResponseData,Propmt__DeleteOneInput,Propmt__DeleteOneResponse,            Propmt__DeleteOneResponseData,Propmt__GetListInput,Propmt__GetListResponse,            Propmt__GetListResponseData,Propmt__UpdateOneInput,Propmt__UpdateOneResponse,            Propmt__UpdateOneResponseData,User__CreateOneUserInput,User__CreateOneUserResponse,            User__CreateOneUserResponseData,User__GetOneUserInput,User__GetOneUserResponse,            User__GetOneUserResponseData,User__MeResponse,            User__MeResponseData,User__UpdateInfoInput,User__UpdateInfoResponse,            User__UpdateInfoResponseData,Chat__ChatSSEInput,Chat__ChatSSEResponse,Chat__ChatSSEResponseData, } from './models'

export const WUNDERGRAPH_S3_ENABLED = false
export const WUNDERGRAPH_AUTH_ENABLED = true


export enum AuthProviderId {
    "casdoor" = "casdoor",
}

export interface AuthProvider {
    id: AuthProviderId;
    login: (redirectURI?: string) => void;
}

export const defaultClientConfig: ClientConfig = {
    applicationHash: "edbd61b0",
    baseURL: "http://localhost:9991",
    sdkVersion: ""
}

export const operationMetadata: OperationMetadata = {
    "Chat/CreateOne": {
        requiresAuthentication: true
		}
    ,
    "Chat/DeleteOne": {
        requiresAuthentication: true
		}
    ,
    "Chat/GetByHistory": {
        requiresAuthentication: true
		}
    ,
    "Chat/GetMyHistoryChats": {
        requiresAuthentication: true
		}
    ,
    "Chat/UpdateChatText": {
        requiresAuthentication: true
		}
    ,
    "History/CreateOne": {
        requiresAuthentication: true
		}
    ,
    "History/DeleteOne": {
        requiresAuthentication: true
		}
    ,
    "History/GetList": {
        requiresAuthentication: true
		}
    ,
    "History/UpdateOne": {
        requiresAuthentication: true
		}
    ,
    "Propmt/CreateOne": {
        requiresAuthentication: true
		}
    ,
    "Propmt/DeleteMany": {
        requiresAuthentication: true
		}
    ,
    "Propmt/DeleteOne": {
        requiresAuthentication: true
		}
    ,
    "Propmt/GetList": {
        requiresAuthentication: true
		}
    ,
    "Propmt/UpdateOne": {
        requiresAuthentication: true
		}
    ,
    "User/CreateOneUser": {
        requiresAuthentication: true
		}
    ,
    "User/GetOneUser": {
        requiresAuthentication: true
		}
    ,
    "User/Me": {
        requiresAuthentication: true
		}
    ,
    "User/UpdateInfo": {
        requiresAuthentication: true
		}
    ,
    "Chat/ChatSSE": {
        requiresAuthentication: false
		}
    
}

export class WunderGraphClient extends Client {
	query<
		OperationName extends Extract<keyof Operations['queries'], string>,
		Input extends Operations['queries'][OperationName]['input'] = Operations['queries'][OperationName]['input'],
		Data extends Operations['queries'][OperationName]['data'] = Operations['queries'][OperationName]['data']
	>(options: OperationName extends string ? OperationRequestOptions<OperationName, Input> : OperationRequestOptions) {
		return super.query<OperationRequestOptions, Data>(options);
	}
	mutate<
		OperationName extends Extract<keyof Operations['mutations'], string>,
		Input extends Operations['mutations'][OperationName]['input'] = Operations['mutations'][OperationName]['input'],
		Data extends Operations['mutations'][OperationName]['data'] = Operations['mutations'][OperationName]['data']
	>(options: OperationName extends string ? OperationRequestOptions<OperationName, Input> : OperationRequestOptions) {
		return super.mutate<OperationRequestOptions, Data>(options);
	}
	subscribe<
		OperationName extends Extract<keyof Operations['subscriptions'], string>,
		Input extends Operations['subscriptions'][OperationName]['input'] = Operations['subscriptions'][OperationName]['input'],
		Data extends Operations['subscriptions'][OperationName]['data'] = Operations['subscriptions'][OperationName]['data']
	>(
		options: OperationName extends string
			? SubscriptionRequestOptions<OperationName, Input>
			: SubscriptionRequestOptions,
		cb: SubscriptionEventHandler<Data>
	) {
		return super.subscribe(options, cb);
	}
	public login(authProviderID: Operations['authProvider'], redirectURI?: string) {
		return super.login(authProviderID, redirectURI);
	}
	public async fetchUser<TUser extends User = User<Role, CustomClaims>>(options?: FetchUserRequestOptions) {
		return super.fetchUser<TUser>(options);
	}
}

export const createClient = (config?: CreateClientConfig) => {
	return new WunderGraphClient({
		...defaultClientConfig,
		...config,
		operationMetadata,
		csrfEnabled: true,
	});
};

export type Queries = {
    'Chat/GetByHistory': {
        input: Chat__GetByHistoryInput
        data: Chat__GetByHistoryResponseData
        requiresAuthentication: true
        
    }
    'Chat/GetMyHistoryChats': {
        input: Chat__GetMyHistoryChatsInput
        data: Chat__GetMyHistoryChatsResponseData
        requiresAuthentication: true
        
    }
    'History/GetList': {
        input?: undefined
        data: History__GetListResponseData
        requiresAuthentication: true
        
    }
    'Propmt/GetList': {
        input: Propmt__GetListInput
        data: Propmt__GetListResponseData
        requiresAuthentication: true
        
    }
    'User/GetOneUser': {
        input: User__GetOneUserInput
        data: User__GetOneUserResponseData
        requiresAuthentication: true
        
    }
    'User/Me': {
        input?: undefined
        data: User__MeResponseData
        requiresAuthentication: true
        
    }
}

export type Mutations = {
    'Chat/CreateOne': {
        input: Chat__CreateOneInput
        data: Chat__CreateOneResponseData
        requiresAuthentication: true
    }
    'Chat/DeleteOne': {
        input: Chat__DeleteOneInput
        data: Chat__DeleteOneResponseData
        requiresAuthentication: true
    }
    'Chat/UpdateChatText': {
        input: Chat__UpdateChatTextInput
        data: Chat__UpdateChatTextResponseData
        requiresAuthentication: true
    }
    'History/CreateOne': {
        input: History__CreateOneInput
        data: History__CreateOneResponseData
        requiresAuthentication: true
    }
    'History/DeleteOne': {
        input: History__DeleteOneInput
        data: History__DeleteOneResponseData
        requiresAuthentication: true
    }
    'History/UpdateOne': {
        input: History__UpdateOneInput
        data: History__UpdateOneResponseData
        requiresAuthentication: true
    }
    'Propmt/CreateOne': {
        input: Propmt__CreateOneInput
        data: Propmt__CreateOneResponseData
        requiresAuthentication: true
    }
    'Propmt/DeleteMany': {
        input: Propmt__DeleteManyInput
        data: Propmt__DeleteManyResponseData
        requiresAuthentication: true
    }
    'Propmt/DeleteOne': {
        input: Propmt__DeleteOneInput
        data: Propmt__DeleteOneResponseData
        requiresAuthentication: true
    }
    'Propmt/UpdateOne': {
        input: Propmt__UpdateOneInput
        data: Propmt__UpdateOneResponseData
        requiresAuthentication: true
    }
    'User/CreateOneUser': {
        input: User__CreateOneUserInput
        data: User__CreateOneUserResponseData
        requiresAuthentication: true
    }
    'User/UpdateInfo': {
        input: User__UpdateInfoInput
        data: User__UpdateInfoResponseData
        requiresAuthentication: true
    }
}

export type Subscriptions = {
    'Chat/ChatSSE': {
        input: Chat__ChatSSEInput
        data: Chat__ChatSSEResponseData
        requiresAuthentication: false
    }
}

export type LiveQueries = {
}

export interface Operations extends OperationsDefinition<Queries, Mutations, Subscriptions, Role,{}> {}
