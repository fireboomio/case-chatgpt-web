
import type { WunderGraphResponse } from 'fireboom-wundersdk/server'
import { HttpTransportHookRequestWithResponse, SKIP, CANCEL } from 'generated/fireboom.hooks'

export default async function onOriginResponse(hook: HttpTransportHookRequestWithResponse) : Promise<WunderGraphResponse | SKIP | CANCEL>{
	// TODO: 在此处添加代码
	return hook.response
}
