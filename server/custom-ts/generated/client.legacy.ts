// import fetch from '@web-std/fetch'
import type { RequestOptions, UserListener, Response } from 'fireboom-wundersdk/server';
import type { Chat__CreateOneInput,Chat__CreateOneResponse,Chat__DeleteOneInput,Chat__DeleteOneResponse,Chat__GetByHistoryInput,Chat__GetByHistoryResponse,Chat__GetListResponse,Chat__UpdateChatTextInput,Chat__UpdateChatTextResponse,History__CreateOneInput,History__CreateOneResponse,History__DeleteOneInput,History__DeleteOneResponse,History__GetListResponse,History__UpdateOneInput,History__UpdateOneResponse,Propmt__CreateOneInput,Propmt__CreateOneResponse,Propmt__DeleteManyInput,Propmt__DeleteManyResponse,Propmt__DeleteOneInput,Propmt__DeleteOneResponse,Propmt__GetListInput,Propmt__GetListResponse,Propmt__UpdateOneInput,Propmt__UpdateOneResponse,User__CreateOneUserInput,User__CreateOneUserResponse,User__GetOneUserInput,User__GetOneUserResponse,User__MeResponse,User__UpdateInfoInput,User__UpdateInfoResponse,Chat__ChatSSEInput,Chat__ChatSSEResponse, } from './models'
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
            applicationHash: "f823b703",
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
        'Chat/GetByHistory': async (options: RequestOptions<Chat__GetByHistoryInput,Chat__GetByHistoryResponse>) => {
            const result = await this._client.query({
                operationName: 'Chat__GetByHistory',
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<Chat__GetByHistoryResponse>(result)
        },
        'Chat/GetList': async (options: RequestOptions<never,Chat__GetListResponse>) => {
            const result = await this._client.query({
                operationName: 'Chat__GetList',
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<Chat__GetListResponse>(result)
        },
        'History/GetList': async (options: RequestOptions<never,History__GetListResponse>) => {
            const result = await this._client.query({
                operationName: 'History__GetList',
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<History__GetListResponse>(result)
        },
        'Propmt/GetList': async (options: RequestOptions<Propmt__GetListInput,Propmt__GetListResponse>) => {
            const result = await this._client.query({
                operationName: 'Propmt__GetList',
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<Propmt__GetListResponse>(result)
        },
        'User/GetOneUser': async (options: RequestOptions<User__GetOneUserInput,User__GetOneUserResponse>) => {
            const result = await this._client.query({
                operationName: 'User__GetOneUser',
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<User__GetOneUserResponse>(result)
        },
        'User/Me': async (options: RequestOptions<never,User__MeResponse>) => {
            const result = await this._client.query({
                operationName: 'User__Me',
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<User__MeResponse>(result)
        },
    }
    
    public mutation = {
        'Chat/CreateOne': async (options: RequestOptions<Chat__CreateOneInput,Chat__CreateOneResponse>) => {
            const result =  await this._client.mutate({
                operationName: 'Chat__CreateOne',
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<Chat__CreateOneResponse>(result)
        },
        'Chat/DeleteOne': async (options: RequestOptions<Chat__DeleteOneInput,Chat__DeleteOneResponse>) => {
            const result =  await this._client.mutate({
                operationName: 'Chat__DeleteOne',
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<Chat__DeleteOneResponse>(result)
        },
        'Chat/UpdateChatText': async (options: RequestOptions<Chat__UpdateChatTextInput,Chat__UpdateChatTextResponse>) => {
            const result =  await this._client.mutate({
                operationName: 'Chat__UpdateChatText',
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<Chat__UpdateChatTextResponse>(result)
        },
        'History/CreateOne': async (options: RequestOptions<History__CreateOneInput,History__CreateOneResponse>) => {
            const result =  await this._client.mutate({
                operationName: 'History__CreateOne',
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<History__CreateOneResponse>(result)
        },
        'History/DeleteOne': async (options: RequestOptions<History__DeleteOneInput,History__DeleteOneResponse>) => {
            const result =  await this._client.mutate({
                operationName: 'History__DeleteOne',
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<History__DeleteOneResponse>(result)
        },
        'History/UpdateOne': async (options: RequestOptions<History__UpdateOneInput,History__UpdateOneResponse>) => {
            const result =  await this._client.mutate({
                operationName: 'History__UpdateOne',
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<History__UpdateOneResponse>(result)
        },
        'Propmt/CreateOne': async (options: RequestOptions<Propmt__CreateOneInput,Propmt__CreateOneResponse>) => {
            const result =  await this._client.mutate({
                operationName: 'Propmt__CreateOne',
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<Propmt__CreateOneResponse>(result)
        },
        'Propmt/DeleteMany': async (options: RequestOptions<Propmt__DeleteManyInput,Propmt__DeleteManyResponse>) => {
            const result =  await this._client.mutate({
                operationName: 'Propmt__DeleteMany',
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<Propmt__DeleteManyResponse>(result)
        },
        'Propmt/DeleteOne': async (options: RequestOptions<Propmt__DeleteOneInput,Propmt__DeleteOneResponse>) => {
            const result =  await this._client.mutate({
                operationName: 'Propmt__DeleteOne',
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<Propmt__DeleteOneResponse>(result)
        },
        'Propmt/UpdateOne': async (options: RequestOptions<Propmt__UpdateOneInput,Propmt__UpdateOneResponse>) => {
            const result =  await this._client.mutate({
                operationName: 'Propmt__UpdateOne',
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<Propmt__UpdateOneResponse>(result)
        },
        'User/CreateOneUser': async (options: RequestOptions<User__CreateOneUserInput,User__CreateOneUserResponse>) => {
            const result =  await this._client.mutate({
                operationName: 'User__CreateOneUser',
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<User__CreateOneUserResponse>(result)
        },
        'User/UpdateInfo': async (options: RequestOptions<User__UpdateInfoInput,User__UpdateInfoResponse>) => {
            const result =  await this._client.mutate({
                operationName: 'User__UpdateInfo',
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<User__UpdateInfoResponse>(result)
        },
    }
    
    public subscription = {
        'Chat/ChatSSE': (options: RequestOptions<Chat__ChatSSEInput,Chat__ChatSSEResponse>, cb: (response: Response<Chat__ChatSSEResponse>) => void) => {
            return this._client.subscribe({
                operationName: 'Chat__ChatSSE',
                liveQuery: false,
                input: options.input,
                abortSignal: options.abortSignal,
            }, (result) => cb(this.resultToResponse<Chat__ChatSSEResponse>(result)));
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