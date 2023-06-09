import type { AuthenticationHookRequest } from 'fireboom-wundersdk/server'

export default async function postAuthentication(hook: AuthenticationHookRequest): Promise<void> {
  if (hook.user) {
    const { provider, providerId, userId, name, picture } = hook.user
    const resp = await hook.internalClient.queries.User__GetOneUser({
      input: {
        id: userId,
      },
    })
    if (!resp.error) {
      const existedUser = resp.data!.data
      if (!existedUser) {
        const rest = await hook.internalClient.mutations.User__CreateOneUser({
          input: {
            name: name as string,
            provider: provider!,
            providerId: providerId!,
            id: userId!,
            avatar: picture,
            bio: '',
          },
        })
        if (!rest.error)
          console.info(`Success sync user: ${providerId} - ${name}`)
      }
    }
  }
}
