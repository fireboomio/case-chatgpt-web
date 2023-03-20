import fetch from '@web-std/fetch'
import type { RequestOptions, UserListener, Response } from "fireboom-wundersdk/server";

import type { TestResponse,YYYYYYYResponse } from "./models";
import type { User, Role } from "./interface";

import {
	Client as WunderGraphClient,
	ClientConfig,
	UploadRequestOptions,
	ClientResponse as Result,
    LogoutOptions
} from "fireboom-wundersdk/client";

export const FIREBOOM_S3_ENABLED = false;
export const FIREBOOM_AUTH_ENABLED = false;



export class Client {
    constructor(config: Partial<ClientConfig> = {}) {
        const {
            baseURL = "http://localhost:9991",
            ...rest
        } = config

        this._client = new WunderGraphClient({
            baseURL,
            applicationHash: "ba0af282",
            sdkVersion: "",
            customFetch: fetch,
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
        "Test": async (options: RequestOptions<never,TestResponse>) => {
            const result = await this._client.query({
                operationName: "Test",
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<TestResponse>(result)
        },
        "YYYYYYY": async (options: RequestOptions<never,YYYYYYYResponse>) => {
            const result = await this._client.query({
                operationName: "YYYYYYY",
                input: options.input,
                abortSignal: options.abortSignal,
            })
            return this.resultToResponse<YYYYYYYResponse>(result)
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

}