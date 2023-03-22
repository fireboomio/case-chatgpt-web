import { defineStore } from 'pinia'
import { getToken, removeToken, setToken } from './helper'
import { store, useChatStore, useUserStore } from '@/store'
import client from '@/services'

interface SessionResponse {
  auth: boolean
  model: 'ChatGPTAPI' | 'ChatGPTUnofficialProxyAPI'
}

export interface AuthState {
  token: string | undefined | null
  session: SessionResponse | null
}

export const useAuthStore = defineStore('auth-store', {
  state: (): AuthState => ({
    token: getToken(),
    session: null,
  }),

  getters: {
    isChatGPTAPI(state): boolean {
      return state.session?.model === 'ChatGPTAPI'
    },
  },

  actions: {
    async getSession() {
      const userStore = useUserStore()
      const chatStore = useChatStore()
      try {
        this.session = { auth: true, model: 'ChatGPTAPI' }
        try {
          const userResp = await client.query({
            operationName: 'User/Me',
          })
          if (!userResp.error) {
            const user = userResp.data!.data!
            // await fetchSession<SessionResponse>()
            userStore.updateUserInfo({
              avatar: user.avatar,
              name: user.name,
              description: user.description,
            })
            this.token = user.id
            chatStore.fetchHistories()
          }
        }
        catch (error) {
          //
        }

        return Promise.resolve(this.session)
      }
      catch (error) {
        return Promise.reject(error)
      }
    },

    setToken(token: string) {
      this.token = token
      setToken(token)
    },

    removeToken() {
      this.token = undefined
      removeToken()
    },
  },
})

export function useAuthStoreWithout() {
  return useAuthStore(store)
}
