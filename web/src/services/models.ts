import type { ExtractResponse } from 'fireboom-wundersdk/operations'
import type function_ChatGPT__Subscription__ChatSSE from '../../../server/custom-ts/operations/ChatGPT/Subscription/ChatSSE'

export interface ChatGPT__Chat__CreateOneChatMessageInput {
  chatId: number
  parentMessageId?: string
  text: string

}
export interface InternalChatGPT__Chat__CreateOneChatMessageInput {
  chatId: number
  parentMessageId?: string
  text: string
}
export interface InjectedChatGPT__Chat__CreateOneChatMessageInput {
  chatId: number
  parentMessageId?: string
  text: string

}

export interface ChatGPT__Chat__CreateOneChatMessageResponse {
  data?: ChatGPT__Chat__CreateOneChatMessageResponseData
  errors?: ReadonlyArray<GraphQLError>
}
export interface ChatGPT__Chat__CreateOneChatMessageResponseData {
  data?: {
    chatId?: number
    createdAt?: string
    id?: number
    parentMessageId?: string
    text?: string
  }
}
export interface ChatGPT__Chat__CreateOneHistoryInput {
  title: string

}
export interface InternalChatGPT__Chat__CreateOneHistoryInput {
  title: string
  userId?: string
}
export interface InjectedChatGPT__Chat__CreateOneHistoryInput {
  title: string
  userId: string

}

export interface ChatGPT__Chat__CreateOneHistoryResponse {
  data?: ChatGPT__Chat__CreateOneHistoryResponseData
  errors?: ReadonlyArray<GraphQLError>
}
export interface ChatGPT__Chat__CreateOneHistoryResponseData {
  data?: {
    createdAt?: string
    id?: number
    title?: string
    updatedAt?: string
  }
}
export interface ChatGPT__Chat__DeleteOneChatMessageInput {
  id: number

}
export interface InternalChatGPT__Chat__DeleteOneChatMessageInput {
  id: number
}
export interface InjectedChatGPT__Chat__DeleteOneChatMessageInput {
  id: number

}

export interface ChatGPT__Chat__DeleteOneChatMessageResponse {
  data?: ChatGPT__Chat__DeleteOneChatMessageResponseData
  errors?: ReadonlyArray<GraphQLError>
}
export interface ChatGPT__Chat__DeleteOneChatMessageResponseData {
  data?: {
    id?: number
  }
}
export interface ChatGPT__Chat__DeleteOneHistoryInput {
  id: number

}
export interface InternalChatGPT__Chat__DeleteOneHistoryInput {
  id: number
}
export interface InjectedChatGPT__Chat__DeleteOneHistoryInput {
  id: number

}

export interface ChatGPT__Chat__DeleteOneHistoryResponse {
  data?: ChatGPT__Chat__DeleteOneHistoryResponseData
  errors?: ReadonlyArray<GraphQLError>
}
export interface ChatGPT__Chat__DeleteOneHistoryResponseData {
  data?: {
    id?: number
  }
}
export interface ChatGPT__Chat__GetHistoryListInput {
  take?: number
  orderBy?: {
  }[]
  skip?: number

}
export interface InternalChatGPT__Chat__GetHistoryListInput {
  orderBy?: {
  }[]
  skip?: number
  take?: number
}
export interface InjectedChatGPT__Chat__GetHistoryListInput {
  orderBy?: {
  }[]
  skip?: number
  take?: number

}

export interface ChatGPT__Chat__GetHistoryListResponse {
  data?: ChatGPT__Chat__GetHistoryListResponseData
  errors?: ReadonlyArray<GraphQLError>
}
export interface ChatGPT__Chat__GetHistoryListResponseData {
  total?: number
  data?: {
    createdAt?: string
    id?: number
    title?: string
    updatedAt?: string
  }[]
}

export interface ChatGPT__Chat__GetManyChatMessageResponse {
  data?: ChatGPT__Chat__GetManyChatMessageResponseData
  errors?: ReadonlyArray<GraphQLError>
}
export interface ChatGPT__Chat__GetManyChatMessageResponseData {
  data?: {
    chatId?: number
    createdAt?: string
    id?: number
    parentMessageId?: string
    text?: string
  }[]
}
export interface ChatGPT__Chat__UpdateOneHistoryInput {
  id: number
  title?: string

}
export interface InternalChatGPT__Chat__UpdateOneHistoryInput {
  id: number
  title?: string
}
export interface InjectedChatGPT__Chat__UpdateOneHistoryInput {
  id: number
  title?: string

}

export interface ChatGPT__Chat__UpdateOneHistoryResponse {
  data?: ChatGPT__Chat__UpdateOneHistoryResponseData
  errors?: ReadonlyArray<GraphQLError>
}
export interface ChatGPT__Chat__UpdateOneHistoryResponseData {
  data?: {
    createdAt?: string
    id?: number
    title?: string
    updatedAt?: string
  }
}
export interface ChatGPT__Propmt__CreateOnePromptInput {
  prompt: string
  title: string

}
export interface InternalChatGPT__Propmt__CreateOnePromptInput {
  prompt: string
  title: string
  updatedAt?: string
}
export interface InjectedChatGPT__Propmt__CreateOnePromptInput {
  prompt: string
  title: string
  updatedAt: string

}

export interface ChatGPT__Propmt__CreateOnePromptResponse {
  data?: ChatGPT__Propmt__CreateOnePromptResponseData
  errors?: ReadonlyArray<GraphQLError>
}
export interface ChatGPT__Propmt__CreateOnePromptResponseData {
  data?: {
    id?: number
    prompt?: string
    title?: string
    updatedAt?: string
    createdAt?: string
  }
}
export interface ChatGPT__Propmt__DeleteManyPromptInput {
  ids: {
  }[]

}
export interface InternalChatGPT__Propmt__DeleteManyPromptInput {
  ids: {
  }[]
}
export interface InjectedChatGPT__Propmt__DeleteManyPromptInput {
  ids: {
  }[]

}

export interface ChatGPT__Propmt__DeleteManyPromptResponse {
  data?: ChatGPT__Propmt__DeleteManyPromptResponseData
  errors?: ReadonlyArray<GraphQLError>
}
export interface ChatGPT__Propmt__DeleteManyPromptResponseData {
  data?: {
    count?: number
  }
}
export interface ChatGPT__Propmt__DeleteOnePromptInput {
  id: number

}
export interface InternalChatGPT__Propmt__DeleteOnePromptInput {
  id: number
}
export interface InjectedChatGPT__Propmt__DeleteOnePromptInput {
  id: number

}

export interface ChatGPT__Propmt__DeleteOnePromptResponse {
  data?: ChatGPT__Propmt__DeleteOnePromptResponseData
  errors?: ReadonlyArray<GraphQLError>
}
export interface ChatGPT__Propmt__DeleteOnePromptResponseData {
  data?: {
    id?: number
  }
}
export interface ChatGPT__Propmt__GetPromptListInput {
  orderBy?: {
  }[]
  skip?: number
  take?: number

}
export interface InternalChatGPT__Propmt__GetPromptListInput {
  skip?: number
  take?: number
  orderBy?: {
  }[]
}
export interface InjectedChatGPT__Propmt__GetPromptListInput {
  orderBy?: {
  }[]
  skip?: number
  take?: number

}

export interface ChatGPT__Propmt__GetPromptListResponse {
  data?: ChatGPT__Propmt__GetPromptListResponseData
  errors?: ReadonlyArray<GraphQLError>
}
export interface ChatGPT__Propmt__GetPromptListResponseData {
  data?: {
    id?: number
    prompt?: string
    title?: string
    updatedAt?: string
    createdAt?: string
  }[]
  total?: number
}
export interface ChatGPT__Propmt__UpdateOnePromptInput {
  id: number
  prompt?: string
  title?: string

}
export interface InternalChatGPT__Propmt__UpdateOnePromptInput {
  title?: string
  updatedAt?: string
  id: number
  prompt?: string
}
export interface InjectedChatGPT__Propmt__UpdateOnePromptInput {
  prompt?: string
  title?: string
  updatedAt: string
  id: number

}

export interface ChatGPT__Propmt__UpdateOnePromptResponse {
  data?: ChatGPT__Propmt__UpdateOnePromptResponseData
  errors?: ReadonlyArray<GraphQLError>
}
export interface ChatGPT__Propmt__UpdateOnePromptResponseData {
  data?: {
    prompt?: string
    title?: string
    updatedAt?: string
    createdAt?: string
    id?: number
  }
}
export interface User__CreateOneUserInput {
  avatar: string
  bio: string
  id: string
  name: string
  provider?: string

}
export interface InternalUser__CreateOneUserInput {
  avatar: string
  bio: string
  id: string
  name: string
  provider?: string
}
export interface InjectedUser__CreateOneUserInput {
  provider?: string
  avatar: string
  bio: string
  id: string
  name: string

}

export interface User__CreateOneUserResponse {
  data?: User__CreateOneUserResponseData
  errors?: ReadonlyArray<GraphQLError>
}
export interface User__CreateOneUserResponseData {
  data?: {
    id?: string
  }
}
export interface User__GetOneUserInput {
  id?: string

}
export interface InternalUser__GetOneUserInput {
  id?: string
}
export interface InjectedUser__GetOneUserInput {
  id?: string

}

export interface User__GetOneUserResponse {
  data?: User__GetOneUserResponseData
  errors?: ReadonlyArray<GraphQLError>
}
export interface User__GetOneUserResponseData {
  data?: {
    id?: string
    name?: string
    avatar?: string
    bio?: string
  }
}
export interface ChatGPT__Subscription__ChatSSEInput {
  prompt: string
  chatId?: string
  regenerateId?: string

}
export interface InternalChatGPT__Subscription__ChatSSEInput {
  chatId?: string
  regenerateId?: string
  prompt: string
}

export type ChatGPT__Subscription__ChatSSEResponseData = ExtractResponse<typeof function_ChatGPT__Subscription__ChatSSE>

export interface ChatGPT__Subscription__ChatSSEResponse {
  data?: ChatGPT__Subscription__ChatSSEResponseData
  errors?: ReadonlyArray<GraphQLError>
}

export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>

export interface JSONObject { [key: string]: JSONValue }

export interface GraphQLError {
  message: string
  path?: ReadonlyArray<string | number>
}
