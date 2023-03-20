import fetch from "@web-std/fetch";
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
import type { ChatGPT__Chat__CreateOneChatMessageInput,ChatGPT__Chat__CreateOneChatMessageResponse,            ChatGPT__Chat__CreateOneChatMessageResponseData,ChatGPT__Chat__CreateOneHistoryInput,ChatGPT__Chat__CreateOneHistoryResponse,            ChatGPT__Chat__CreateOneHistoryResponseData,ChatGPT__Chat__DeleteOneChatMessageInput,ChatGPT__Chat__DeleteOneChatMessageResponse,            ChatGPT__Chat__DeleteOneChatMessageResponseData,ChatGPT__Chat__DeleteOneHistoryInput,ChatGPT__Chat__DeleteOneHistoryResponse,            ChatGPT__Chat__DeleteOneHistoryResponseData,ChatGPT__Chat__GetHistoryListInput,ChatGPT__Chat__GetHistoryListResponse,            ChatGPT__Chat__GetHistoryListResponseData,ChatGPT__Chat__GetManyChatMessageResponse,            ChatGPT__Chat__GetManyChatMessageResponseData,ChatGPT__Chat__UpdateOneHistoryInput,ChatGPT__Chat__UpdateOneHistoryResponse,            ChatGPT__Chat__UpdateOneHistoryResponseData,ChatGPT__Propmt__CreateOnePromptInput,ChatGPT__Propmt__CreateOnePromptResponse,            ChatGPT__Propmt__CreateOnePromptResponseData,ChatGPT__Propmt__DeleteManyPromptInput,ChatGPT__Propmt__DeleteManyPromptResponse,            ChatGPT__Propmt__DeleteManyPromptResponseData,ChatGPT__Propmt__DeleteOnePromptInput,ChatGPT__Propmt__DeleteOnePromptResponse,            ChatGPT__Propmt__DeleteOnePromptResponseData,ChatGPT__Propmt__GetPromptListInput,ChatGPT__Propmt__GetPromptListResponse,            ChatGPT__Propmt__GetPromptListResponseData,ChatGPT__Propmt__UpdateOnePromptInput,ChatGPT__Propmt__UpdateOnePromptResponse,            ChatGPT__Propmt__UpdateOnePromptResponseData, } from './models'

export const WUNDERGRAPH_S3_ENABLED = false
export const WUNDERGRAPH_AUTH_ENABLED = true


export enum AuthProviderId {
    "authing" = "authing",
}

export interface AuthProvider {
    id: AuthProviderId;
    login: (redirectURI?: string) => void;
}

export const defaultClientConfig: ClientConfig = {
    applicationHash: "3aed7b29",
    baseURL: "http://localhost:9991",
    sdkVersion: "",
    customFetch: fetch,
}

export const operationMetadata: OperationMetadata = {
    "ChatGPT/Chat/CreateOneChatMessage": {
        requiresAuthentication: false
		}
    ,
    "ChatGPT/Chat/CreateOneHistory": {
        requiresAuthentication: false
		}
    ,
    "ChatGPT/Chat/DeleteOneChatMessage": {
        requiresAuthentication: false
		}
    ,
    "ChatGPT/Chat/DeleteOneHistory": {
        requiresAuthentication: false
		}
    ,
    "ChatGPT/Chat/GetHistoryList": {
        requiresAuthentication: false
		}
    ,
    "ChatGPT/Chat/GetManyChatMessage": {
        requiresAuthentication: false
		}
    ,
    "ChatGPT/Chat/UpdateOneHistory": {
        requiresAuthentication: false
		}
    ,
    "ChatGPT/Propmt/CreateOnePrompt": {
        requiresAuthentication: false
		}
    ,
    "ChatGPT/Propmt/DeleteManyPrompt": {
        requiresAuthentication: false
		}
    ,
    "ChatGPT/Propmt/DeleteOnePrompt": {
        requiresAuthentication: false
		}
    ,
    "ChatGPT/Propmt/GetPromptList": {
        requiresAuthentication: false
		}
    ,
    "ChatGPT/Propmt/UpdateOnePrompt": {
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
    'ChatGPT/Chat/GetHistoryList': {
        input: ChatGPT__Chat__GetHistoryListInput
        data: ChatGPT__Chat__GetHistoryListResponseData
        requiresAuthentication: false
        
    }
    'ChatGPT/Chat/GetManyChatMessage': {
        input?: undefined
        data: ChatGPT__Chat__GetManyChatMessageResponseData
        requiresAuthentication: false
        
    }
    'ChatGPT/Propmt/GetPromptList': {
        input: ChatGPT__Propmt__GetPromptListInput
        data: ChatGPT__Propmt__GetPromptListResponseData
        requiresAuthentication: false
        
    }
}

export type Mutations = {
    'ChatGPT/Chat/CreateOneChatMessage': {
        input: ChatGPT__Chat__CreateOneChatMessageInput
        data: ChatGPT__Chat__CreateOneChatMessageResponseData
        requiresAuthentication: false
    }
    'ChatGPT/Chat/CreateOneHistory': {
        input: ChatGPT__Chat__CreateOneHistoryInput
        data: ChatGPT__Chat__CreateOneHistoryResponseData
        requiresAuthentication: false
    }
    'ChatGPT/Chat/DeleteOneChatMessage': {
        input: ChatGPT__Chat__DeleteOneChatMessageInput
        data: ChatGPT__Chat__DeleteOneChatMessageResponseData
        requiresAuthentication: false
    }
    'ChatGPT/Chat/DeleteOneHistory': {
        input: ChatGPT__Chat__DeleteOneHistoryInput
        data: ChatGPT__Chat__DeleteOneHistoryResponseData
        requiresAuthentication: false
    }
    'ChatGPT/Chat/UpdateOneHistory': {
        input: ChatGPT__Chat__UpdateOneHistoryInput
        data: ChatGPT__Chat__UpdateOneHistoryResponseData
        requiresAuthentication: false
    }
    'ChatGPT/Propmt/CreateOnePrompt': {
        input: ChatGPT__Propmt__CreateOnePromptInput
        data: ChatGPT__Propmt__CreateOnePromptResponseData
        requiresAuthentication: false
    }
    'ChatGPT/Propmt/DeleteManyPrompt': {
        input: ChatGPT__Propmt__DeleteManyPromptInput
        data: ChatGPT__Propmt__DeleteManyPromptResponseData
        requiresAuthentication: false
    }
    'ChatGPT/Propmt/DeleteOnePrompt': {
        input: ChatGPT__Propmt__DeleteOnePromptInput
        data: ChatGPT__Propmt__DeleteOnePromptResponseData
        requiresAuthentication: false
    }
    'ChatGPT/Propmt/UpdateOnePrompt': {
        input: ChatGPT__Propmt__UpdateOnePromptInput
        data: ChatGPT__Propmt__UpdateOnePromptResponseData
        requiresAuthentication: false
    }
}

export type Subscriptions = {
}

export type LiveQueries = {
}

export interface Operations extends OperationsDefinition<Queries, Mutations, Subscriptions, Role,{}> {}
