import type function_ChatGPT__Subscription__ChatSSE from '../operations/ChatGPT/Subscription/ChatSSE'

import type { ExtractResponse } from 'fireboom-wundersdk/operations'
export interface ChatGPT__Chat__CreateOneChatMessageInput {
     chatId: number
                 parentMessageId?: string
                 text: string
            
}
export interface InternalChatGPT__Chat__CreateOneChatMessageInput {
      text: string
      chatId: number
      parentMessageId?: string
}
export interface InjectedChatGPT__Chat__CreateOneChatMessageInput {
     text: string
         chatId: number
         parentMessageId?: string
    
}


    
export interface ChatGPT__Chat__CreateOneChatMessageResponse {
    data?: ChatGPT__Chat__CreateOneChatMessageResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface ChatGPT__Chat__CreateOneChatMessageResponseData {
    data?: {
        chatId?: number
        createdAt?: string
        id?: number
        parentMessageId?: string
        text?: string
    },
}export interface ChatGPT__Chat__CreateOneHistoryInput {
     title: string
            
}
export interface InternalChatGPT__Chat__CreateOneHistoryInput {
      title: string
}
export interface InjectedChatGPT__Chat__CreateOneHistoryInput {
     title: string
    
}


    
export interface ChatGPT__Chat__CreateOneHistoryResponse {
    data?: ChatGPT__Chat__CreateOneHistoryResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface ChatGPT__Chat__CreateOneHistoryResponseData {
    data?: {
        id?: number
        title?: string
        updatedAt?: string
        createdAt?: string
    },
}export interface ChatGPT__Chat__DeleteOneChatMessageInput {
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
    errors?: ReadonlyArray<GraphQLError>;
}
export interface ChatGPT__Chat__DeleteOneChatMessageResponseData {
    data?: {
        id?: number
    },
}export interface ChatGPT__Chat__DeleteOneHistoryInput {
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
    errors?: ReadonlyArray<GraphQLError>;
}
export interface ChatGPT__Chat__DeleteOneHistoryResponseData {
    data?: {
        id?: number
    },
}export interface ChatGPT__Chat__GetHistoryListInput {
   orderBy?: {
   }[],
                             skip?: number
                 take?: number
            
}
export interface InternalChatGPT__Chat__GetHistoryListInput {
    orderBy?: {
    }[],
      skip?: number
      take?: number
}
export interface grace_NestedStringNullableFilter {
   in?: {
   }[],
                 lt?: string
                 lte?: string
                 contains?: string
                 endsWith?: string
                 equals?: string
                 gt?: string
                 gte?: string
                           notIn?: {
   }[],
                 startsWith?: string
            
}
export interface grace_ChatMessageWhereInput {
                           OR?: {
   }[],
                                                                                    
}
export interface grace_DateTimeFilter {
     lt?: string
                 lte?: string
                           notIn?: {
   }[],
                 equals?: string
                 gt?: string
                 gte?: string
               in?: {
   }[],
            
}
export interface grace_HistoryRelationFilter {
                        
}
export interface grace_IntFilter {
     gte?: number
               in?: {
   }[],
                 lt?: number
                 lte?: number
                           notIn?: {
   }[],
                 equals?: number
                 gt?: number
            
}
export interface grace_NestedDateTimeNullableFilter {
     equals?: string
                 gt?: string
                 gte?: string
               in?: {
   }[],
                 lt?: string
                 lte?: string
                           notIn?: {
   }[],
            
}
export interface grace_StringFilter {
     gt?: string
                 gte?: string
               in?: {
   }[],
                 lt?: string
                             startsWith?: string
                 endsWith?: string
                 equals?: string
               notIn?: {
   }[],
                 contains?: string
                 lte?: string
            
}
export interface grace_DateTimeNullableFilter {
               notIn?: {
   }[],
                 equals?: string
                 gt?: string
                 gte?: string
               in?: {
   }[],
                 lt?: string
                 lte?: string
            
}
export interface grace_HistoryOrderByWithRelationInput {
                 createdAt?: string
                 id?: string
                 title?: string
                 updatedAt?: string
            
}
export interface grace_NestedDateTimeFilter {
     lt?: string
                 lte?: string
                           notIn?: {
   }[],
                 equals?: string
                 gt?: string
                 gte?: string
               in?: {
   }[],
            
}
export interface grace_NestedIntFilter {
     gt?: number
                 gte?: number
               in?: {
   }[],
                 lt?: number
                 lte?: number
                           notIn?: {
   }[],
                 equals?: number
            
}
export interface grace_StringNullableFilter {
     startsWith?: string
                 contains?: string
                 equals?: string
               in?: {
   }[],
                 lte?: string
               notIn?: {
   }[],
                 endsWith?: string
                 gt?: string
                 gte?: string
                 lt?: string
                        
}
export interface grace_ChatMessageListRelationFilter {
                                    
}
export interface grace_ChatMessageOrderByRelationAggregateInput {
     _count?: string
            
}
export interface grace_HistoryWhereInput {
                           OR?: {
   }[],
                                                                        
}
export interface grace_NestedStringFilter {
     gt?: string
                 gte?: string
               in?: {
   }[],
                 lt?: string
               notIn?: {
   }[],
                 startsWith?: string
                 contains?: string
                 endsWith?: string
                 equals?: string
                 lte?: string
                        
}
export interface InjectedChatGPT__Chat__GetHistoryListInput {
   orderBy?: {
   }[],
             skip?: number
         take?: number
    
}


    
export interface ChatGPT__Chat__GetHistoryListResponse {
    data?: ChatGPT__Chat__GetHistoryListResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface ChatGPT__Chat__GetHistoryListResponseData {
      total?: number
    data?: {
        createdAt?: string
        id?: number
        title?: string
        updatedAt?: string
    }[],
}

    
export interface ChatGPT__Chat__GetManyChatMessageResponse {
    data?: ChatGPT__Chat__GetManyChatMessageResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface ChatGPT__Chat__GetManyChatMessageResponseData {
    data?: {
        createdAt?: string
        id?: number
        parentMessageId?: string
        text?: string
        chatId?: number
    }[],
}export interface ChatGPT__Chat__UpdateOneHistoryInput {
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
    errors?: ReadonlyArray<GraphQLError>;
}
export interface ChatGPT__Chat__UpdateOneHistoryResponseData {
    data?: {
        createdAt?: string
        id?: number
        title?: string
        updatedAt?: string
    },
}export interface ChatGPT__Propmt__CreateOnePromptInput {
     prompt: string
                 title: string
            
}
export interface InternalChatGPT__Propmt__CreateOnePromptInput {
      prompt: string
      title: string
      updatedAt?: string
}
export interface InjectedChatGPT__Propmt__CreateOnePromptInput {
     updatedAt: string
         prompt: string
         title: string
    
}


    
export interface ChatGPT__Propmt__CreateOnePromptResponse {
    data?: ChatGPT__Propmt__CreateOnePromptResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface ChatGPT__Propmt__CreateOnePromptResponseData {
    data?: {
        id?: number
        prompt?: string
        title?: string
        updatedAt?: string
        createdAt?: string
    },
}export interface ChatGPT__Propmt__DeleteManyPromptInput {
   ids: {
   }[],
            
}
export interface InternalChatGPT__Propmt__DeleteManyPromptInput {
    ids: {
    }[],
}
export interface InjectedChatGPT__Propmt__DeleteManyPromptInput {
   ids: {
   }[],
    
}


    
export interface ChatGPT__Propmt__DeleteManyPromptResponse {
    data?: ChatGPT__Propmt__DeleteManyPromptResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface ChatGPT__Propmt__DeleteManyPromptResponseData {
    data?: {
        count?: number
    },
}export interface ChatGPT__Propmt__DeleteOnePromptInput {
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
    errors?: ReadonlyArray<GraphQLError>;
}
export interface ChatGPT__Propmt__DeleteOnePromptResponseData {
    data?: {
        id?: number
    },
}export interface ChatGPT__Propmt__GetPromptListInput {
   orderBy?: {
   }[],
                             skip?: number
                 take?: number
            
}
export interface InternalChatGPT__Propmt__GetPromptListInput {
      skip?: number
      take?: number
    orderBy?: {
    }[],
}
export interface grace_StringFilter {
     startsWith?: string
                 gt?: string
                 gte?: string
               in?: {
   }[],
                 lte?: string
                           notIn?: {
   }[],
                 contains?: string
                 endsWith?: string
                 equals?: string
                 lt?: string
            
}
export interface grace_DateTimeNullableFilter {
     equals?: string
                 gt?: string
                 gte?: string
               in?: {
   }[],
                 lt?: string
                 lte?: string
                           notIn?: {
   }[],
            
}
export interface grace_IntFilter {
               notIn?: {
   }[],
                 equals?: number
                 gt?: number
                 gte?: number
               in?: {
   }[],
                 lt?: number
                 lte?: number
            
}
export interface grace_NestedDateTimeNullableFilter {
               notIn?: {
   }[],
                 equals?: string
                 gt?: string
                 gte?: string
               in?: {
   }[],
                 lt?: string
                 lte?: string
            
}
export interface grace_NestedIntFilter {
   in?: {
   }[],
                 lt?: number
                 lte?: number
                           notIn?: {
   }[],
                 equals?: number
                 gt?: number
                 gte?: number
            
}
export interface grace_NestedStringFilter {
               in?: {
   }[],
                 endsWith?: string
                 equals?: string
                 gt?: string
                 gte?: string
                 lt?: string
                 lte?: string
               notIn?: {
   }[],
                 contains?: string
                 startsWith?: string
            
}
export interface grace_DateTimeFilter {
   notIn?: {
   }[],
                 equals?: string
                 gt?: string
                 gte?: string
               in?: {
   }[],
                 lt?: string
                 lte?: string
                        
}
export interface grace_NestedDateTimeFilter {
   notIn?: {
   }[],
                 equals?: string
                 gt?: string
                 gte?: string
               in?: {
   }[],
                 lt?: string
                 lte?: string
                        
}
export interface grace_PromptOrderByWithRelationInput {
     createdAt?: string
                 id?: string
                 prompt?: string
                 title?: string
                 updatedAt?: string
            
}
export interface grace_PromptWhereInput {
   OR?: {
   }[],
                                                                                                
}
export interface InjectedChatGPT__Propmt__GetPromptListInput {
   orderBy?: {
   }[],
             skip?: number
         take?: number
    
}


    
export interface ChatGPT__Propmt__GetPromptListResponse {
    data?: ChatGPT__Propmt__GetPromptListResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface ChatGPT__Propmt__GetPromptListResponseData {
    data?: {
        createdAt?: string
        id?: number
        prompt?: string
        title?: string
        updatedAt?: string
    }[],
      total?: number
}export interface ChatGPT__Propmt__UpdateOnePromptInput {
     title?: string
                 id: number
                 prompt?: string
            
}
export interface InternalChatGPT__Propmt__UpdateOnePromptInput {
      title?: string
      updatedAt?: string
      id: number
      prompt?: string
}
export interface InjectedChatGPT__Propmt__UpdateOnePromptInput {
     id: number
         prompt?: string
         title?: string
         updatedAt: string
    
}


    
export interface ChatGPT__Propmt__UpdateOnePromptResponse {
    data?: ChatGPT__Propmt__UpdateOnePromptResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface ChatGPT__Propmt__UpdateOnePromptResponseData {
    data?: {
        createdAt?: string
        id?: number
        prompt?: string
        title?: string
        updatedAt?: string
    },
}export interface ChatGPT__Subscription__ChatSSEInput {
     prompt: string
                 chatId?: string
                 regenerateId?: string
            
}
export interface InternalChatGPT__Subscription__ChatSSEInput {
      regenerateId?: string
      prompt: string
      chatId?: string
}


export type ChatGPT__Subscription__ChatSSEResponseData = ExtractResponse<typeof function_ChatGPT__Subscription__ChatSSE>

export interface ChatGPT__Subscription__ChatSSEResponse {
    data?: ChatGPT__Subscription__ChatSSEResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
    
export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export interface GraphQLError {
    message: string;
    path?: ReadonlyArray<string | number>;
}