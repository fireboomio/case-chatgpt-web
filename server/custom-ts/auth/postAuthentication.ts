import { createClient } from 'generated/client'
import { AuthenticationHookRequest } from 'fireboom-wundersdk/server'

export default async function postAuthentication(hook: AuthenticationHookRequest): Promise<void> {
  if (hook.user) {
    const client = createClient()
    const { picture, email, name, nickName, provider, providerId, userId } = hook.user
    const resp = await client.query({
      operationName: 'User/GetOneUser',
      input: {
        id: userId
      }
    })
    if (!resp.error) {
      const existedUser = resp.data!.data
      if (!existedUser) {
        const _name = nickName || name || email!
        const rest = await client.mutate({
          operationName: 'User/CreateOneUser',
          input: {
            name: _name,
            provider: provider!,
            id: userId!,
            avatar: picture!,
            bio: ''
          }
        })
        if (!rest.error) {
          console.info(`Success sync user: ${providerId} - ${_name}`)
        }
      }
    }
  }
}