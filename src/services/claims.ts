import { WunderGraphUser } from "fireboom-wundersdk/server"
export type Role = "admin" | "user"

export interface CustomClaims {
	[key: string]: any
}

export interface User extends WunderGraphUser<Role, CustomClaims> {}
