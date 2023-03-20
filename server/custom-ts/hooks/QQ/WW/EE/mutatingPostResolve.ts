import { HookRequest, HookRequestWithResponse } from 'generated/fireboom.hooks'
import { QQ__WW__EEResponse } from 'generated/models'

export default async function mutatingPostResolve(hook: HookRequest & HookRequestWithResponse<QQ__WW__EEResponse>)
  //: Promise<QQ__WW__EEResponse>{ // 取消注释以使用严格的返回类型
  : Promise<any>{
	// TODO: 在此处添加代码
	return hook.response
}