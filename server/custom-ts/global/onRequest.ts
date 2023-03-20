
import type { WunderGraphRequest } from 'fireboom-wundersdk/server'
import { HttpTransportHookRequest, SKIP, CANCEL } from 'generated/fireboom.hooks'

export default async function onOriginRequest(hook: HttpTransportHookRequest) : Promise<WunderGraphRequest | SKIP | CANCEL>{
	// TODO: 在此处添加代码
    console.log("global onRequest")
	return hook.request
}
