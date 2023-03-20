export type Role = "admin" | "user";

export interface User extends WunderGraphUser<Role> {}

export interface WunderGraphUser<Role extends string = any> {
    provider?: string;
    providerId?: string;
    email?: string;
    emailVerified?: boolean;
    name?: string;
    firstName?: string;
    lastName?: string;
    nickName?: string;
    description?: string;
    userId?: string;
    avatarUrl?: string;
    location?: string;
    roles?: Role[];
    customAttributes?: string[];
    customClaims?: {
        [key: string]: any;
    };
    accessToken?: JSONObject;
    rawAccessToken?: string;
    idToken?: JSONObject;
    rawIdToken?: string;
}

export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };
