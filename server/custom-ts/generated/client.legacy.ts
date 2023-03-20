// import fetch from '@web-std/fetch'
import type { RequestOptions, UserListener, Response } from 'fireboom-wundersdk/server';
import type { ChatGPT__Chat__CreateOneChatMessageInput,ChatGPT__Chat__CreateOneChatMessageResponse,ChatGPT__Chat__CreateOneHistoryInput,ChatGPT__Chat__CreateOneHistoryResponse,ChatGPT__Chat__DeleteOneChatMessageInput,ChatGPT__Chat__DeleteOneChatMessageResponse,ChatGPT__Chat__DeleteOneHistoryInput,ChatGPT__Chat__DeleteOneHistoryResponse,ChatGPT__Chat__GetHistoryListInput,ChatGPT__Chat__GetHistoryListResponse,ChatGPT__Chat__GetManyChatMessageResponse,ChatGPT__Chat__UpdateOneHistoryInput,ChatGPT__Chat__UpdateOneHistoryResponse,ChatGPT__Propmt__CreateOnePromptInput,ChatGPT__Propmt__CreateOnePromptResponse,ChatGPT__Propmt__DeleteManyPromptInput,ChatGPT__Propmt__DeleteManyPromptResponse,ChatGPT__Propmt__DeleteOnePromptInput,ChatGPT__Propmt__DeleteOnePromptResponse,ChatGPT__Propmt__GetPromptListInput,ChatGPT__Propmt__GetPromptListResponse,ChatGPT__Propmt__UpdateOnePromptInput,ChatGPT__Propmt__UpdateOnePromptResponse, } from './models'
import type { User, Role } from './claims'

import {
	Client as WunderGraphClient,
	ClientConfig,
	UploadRequestOptions,
	ClientResponse as Result,
    LogoutOptions
} from "fireboom-wundersdk/client";

export const FIREBOOM_S3_ENABLED = false
export const FIREBOOM_AUTH_ENABLED = true


export enum AuthProviderId {
    "authing" = "authing",
}

export interface AuthProvider {
    id: AuthProviderId;
    login: (redirectURI?: string) => void;
}

export class Client {
    constructor(config: Partial<ClientConfig> = {}) {
        const {
            baseURL = "http://localhost:9991",
            ...rest
        } = config

        this._client = new WunderGraphClient({
            baseURL,
            applicationHash: "3aed7b29",
            sdkVersion: "",
            // customFetch: fetch,
            ...rest
        });
        this.user = null;
    }
    private _client: WunderGraphClient;
    private logoutCallback: undefined | (() => void);
    public setLogoutCallback(cb: ()=>void){
        this.logoutCallback = cb;
    }

    private user: User | null;
    private userListener: UserListener<User> | undefined;
    public setUserListener = (listener: UserListener<User>) => {
        this.userListener = listener;
    }

    private setUser = (user: User | null) => {
        if (
            (user === null && this.user !== null) ||
            (user !== null && this.user === null) ||
            JSON.stringify(user) !== JSON.stringify(this.user)
        ) {
            this.user = user;
            if (this.userListener !== undefined) {
                this.userListener(this.user);
            }
        }
    };
    private resultToResponse = <TResponse>(result: Result<any>): Response<TResponse> => {
    if (result.error) {
      return {
        status: 'error',
        message: result.error.message
      }
    }

    return {
      status: 'ok',
      body: {
        data: result.data
      }
    } as Response<any>;
	};
    public query = {
        'ChatGPT/Chat/GetHistoryList': async (options: RequestOptions<ChatGPT__Chat__GetHistoryListInput,ChatGPT__Chat__GetHistoryListResponse>) => {
            const result = await this._client.query({
                operationName: 'ChatGPT__Chat__GetHistoryList',
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<ChatGPT__Chat__GetHistoryListResponse>(result)
        },
        'ChatGPT/Chat/GetManyChatMessage': async (options: RequestOptions<never,ChatGPT__Chat__GetManyChatMessageResponse>) => {
            const result = await this._client.query({
                operationName: 'ChatGPT__Chat__GetManyChatMessage',
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<ChatGPT__Chat__GetManyChatMessageResponse>(result)
        },
        'ChatGPT/Propmt/GetPromptList': async (options: RequestOptions<ChatGPT__Propmt__GetPromptListInput,ChatGPT__Propmt__GetPromptListResponse>) => {
            const result = await this._client.query({
                operationName: 'ChatGPT__Propmt__GetPromptList',
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<ChatGPT__Propmt__GetPromptListResponse>(result)
        },
    }
    
    public mutation = {
        'ChatGPT/Chat/CreateOneChatMessage': async (options: RequestOptions<ChatGPT__Chat__CreateOneChatMessageInput,ChatGPT__Chat__CreateOneChatMessageResponse>) => {
            const result =  await this._client.mutate({
                operationName: 'ChatGPT__Chat__CreateOneChatMessage',
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<ChatGPT__Chat__CreateOneChatMessageResponse>(result)
        },
        'ChatGPT/Chat/CreateOneHistory': async (options: RequestOptions<ChatGPT__Chat__CreateOneHistoryInput,ChatGPT__Chat__CreateOneHistoryResponse>) => {
            const result =  await this._client.mutate({
                operationName: 'ChatGPT__Chat__CreateOneHistory',
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<ChatGPT__Chat__CreateOneHistoryResponse>(result)
        },
        'ChatGPT/Chat/DeleteOneChatMessage': async (options: RequestOptions<ChatGPT__Chat__DeleteOneChatMessageInput,ChatGPT__Chat__DeleteOneChatMessageResponse>) => {
            const result =  await this._client.mutate({
                operationName: 'ChatGPT__Chat__DeleteOneChatMessage',
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<ChatGPT__Chat__DeleteOneChatMessageResponse>(result)
        },
        'ChatGPT/Chat/DeleteOneHistory': async (options: RequestOptions<ChatGPT__Chat__DeleteOneHistoryInput,ChatGPT__Chat__DeleteOneHistoryResponse>) => {
            const result =  await this._client.mutate({
                operationName: 'ChatGPT__Chat__DeleteOneHistory',
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<ChatGPT__Chat__DeleteOneHistoryResponse>(result)
        },
        'ChatGPT/Chat/UpdateOneHistory': async (options: RequestOptions<ChatGPT__Chat__UpdateOneHistoryInput,ChatGPT__Chat__UpdateOneHistoryResponse>) => {
            const result =  await this._client.mutate({
                operationName: 'ChatGPT__Chat__UpdateOneHistory',
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<ChatGPT__Chat__UpdateOneHistoryResponse>(result)
        },
        'ChatGPT/Propmt/CreateOnePrompt': async (options: RequestOptions<ChatGPT__Propmt__CreateOnePromptInput,ChatGPT__Propmt__CreateOnePromptResponse>) => {
            const result =  await this._client.mutate({
                operationName: 'ChatGPT__Propmt__CreateOnePrompt',
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<ChatGPT__Propmt__CreateOnePromptResponse>(result)
        },
        'ChatGPT/Propmt/DeleteManyPrompt': async (options: RequestOptions<ChatGPT__Propmt__DeleteManyPromptInput,ChatGPT__Propmt__DeleteManyPromptResponse>) => {
            const result =  await this._client.mutate({
                operationName: 'ChatGPT__Propmt__DeleteManyPrompt',
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<ChatGPT__Propmt__DeleteManyPromptResponse>(result)
        },
        'ChatGPT/Propmt/DeleteOnePrompt': async (options: RequestOptions<ChatGPT__Propmt__DeleteOnePromptInput,ChatGPT__Propmt__DeleteOnePromptResponse>) => {
            const result =  await this._client.mutate({
                operationName: 'ChatGPT__Propmt__DeleteOnePrompt',
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<ChatGPT__Propmt__DeleteOnePromptResponse>(result)
        },
        'ChatGPT/Propmt/UpdateOnePrompt': async (options: RequestOptions<ChatGPT__Propmt__UpdateOnePromptInput,ChatGPT__Propmt__UpdateOnePromptResponse>) => {
            const result =  await this._client.mutate({
                operationName: 'ChatGPT__Propmt__UpdateOnePrompt',
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<ChatGPT__Propmt__UpdateOnePromptResponse>(result)
        },
    }
    
    

    public fetchUser = async (revalidate?: boolean): Promise<User | null> => {
		try {
			const user = await this._client.fetchUser<User>({
        revalidate
      });
			if (user) {
				this.setUser(user);
				return this.user;
			}
		} catch {}
		this.setUser(null);
		return null;
    };

    public login : Record<AuthProviderId, AuthProvider['login']> = {
        authing: (redirectURI?: string): void => {
            this._client.login(AuthProviderId.authing, redirectURI)
        },
    }

    public authProviders: Array<AuthProvider> = [
        {
            id: AuthProviderId.authing,
            login: this.login[AuthProviderId.authing]
        },
    ]

    public logout = async (options?: LogoutOptions): Promise<boolean> => {
        const response = await this._client.logout(options);

        this.setUser(null);
        this.logoutCallback?.()

        return response
    }
}