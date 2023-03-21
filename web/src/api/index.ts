import type { AxiosProgressEvent, GenericAbortSignal } from 'axios'
import { post } from '@/utils/request'

export function fetchChatAPI<T = any>(
  prompt: string,
  options?: { conversationId?: string; parentMessageId?: string },
  signal?: GenericAbortSignal,
) {
  return post<T>({
    url: '/chat',
    data: { prompt, options },
    signal,
  })
}

export function fetchChatConfig<T = any>() {
  return post<T>({
    url: '/config',
  })
}

export function fetchChatAPIProcess<T = any>(
  params: {
    prompt: string
    options?: { conversationId?: string; parentMessageId?: string }
    signal?: GenericAbortSignal
    onDownloadProgress?: (progressEvent: AxiosProgressEvent) => void },
) {
  return post<T>({
    url: '/chat-process',
    data: { prompt: params.prompt, options: params.options },
    signal: params.signal,
    onDownloadProgress: params.onDownloadProgress,
  })
}

// export function chatWithAI<T = any>(params: {
//   prompt: string
//   chatId: string
//   parentMessageId?: string
//   signal?: GenericAbortSignal
// }) {
//   return get<T>({
//     url: '/ChatGPT/Subscription/ChatSSE',
//     data: {
//       prompt: params.prompt,
//       chatId: params.chatId,
//       parentMessageId: params.parentMessageId,
//       wg_sse: true,
//     },
//     responseType: 'stream',
//     signal: params.signal,
//   })
// }

export function fetchSession<T>() {
  return post<T>({
    url: '/session',
  })
}

export function fetchSpeakConfig<T>() {
  return post<T>({
    url: '/SpeakConfig',
  })
}

export function fetchVerify<T>(token: string) {
  return post<T>({
    url: '/verify',
    data: { token },
  })
}
