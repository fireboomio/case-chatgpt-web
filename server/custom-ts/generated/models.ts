import type function_ChatGPT__Subscription__ChatSSE from '../operations/ChatGPT/Subscription/ChatSSE'

import type { ExtractResponse } from 'fireboom-wundersdk/operations'
export interface ChatGPT__Chat__CreateOneChatMessageInput {
     text: string
                 chatId: number
                 parentMessageId?: string
            
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
      userId?: string
}
export interface InjectedChatGPT__Chat__CreateOneHistoryInput {
     title: string
         userId: string
    
}


    
export interface ChatGPT__Chat__CreateOneHistoryResponse {
    data?: ChatGPT__Chat__CreateOneHistoryResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface ChatGPT__Chat__CreateOneHistoryResponseData {
    data?: {
        createdAt?: string
        id?: number
        title?: string
        updatedAt?: string
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
export interface grace_HistoryListRelationFilter {
                                    
}
export interface grace_HistoryOrderByWithRelationInput {
     createdAt?: string
                 id?: string
                 title?: string
                 updatedAt?: string
                 userId?: string
                                    
}
export interface grace_NestedStringNullableFilter {
     gte?: string
               in?: {
   }[],
                 lt?: string
                 lte?: string
                           notIn?: {
   }[],
                 contains?: string
                 equals?: string
                 gt?: string
                 startsWith?: string
                 endsWith?: string
            
}
export interface grace_StringNullableFilter {
     endsWith?: string
                 gt?: string
                 gte?: string
               in?: {
   }[],
                 startsWith?: string
               notIn?: {
   }[],
                 contains?: string
                 equals?: string
                 lt?: string
                 lte?: string
                        
}
export interface grace_UserOrderByWithRelationInput {
     bio?: string
                 createdAt?: string
                 id?: string
                 name?: string
                 provider?: string
                                         avatar?: string
            
}
export interface grace_UserRelationFilter {
                        
}
export interface grace_ChatMessageOrderByRelationAggregateInput {
     _count?: string
            
}
export interface grace_DateTimeNullableFilter {
     lte?: string
                           notIn?: {
   }[],
                 equals?: string
                 gt?: string
                 gte?: string
               in?: {
   }[],
                 lt?: string
            
}
export interface grace_NestedDateTimeNullableFilter {
     lte?: string
                           notIn?: {
   }[],
                 equals?: string
                 gt?: string
                 gte?: string
               in?: {
   }[],
                 lt?: string
            
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
export interface grace_NestedStringFilter {
     startsWith?: string
                 equals?: string
                 gt?: string
                 gte?: string
               in?: {
   }[],
               notIn?: {
   }[],
                 contains?: string
                 endsWith?: string
                 lt?: string
                 lte?: string
                        
}
export interface grace_PromptOrderByRelationAggregateInput {
     _count?: string
            
}
export interface grace_UserWhereInput {
                                       OR?: {
   }[],
                                                                                                
}
export interface grace_HistoryOrderByRelationAggregateInput {
     _count?: string
            
}
export interface grace_HistoryWhereInput {
                                                               OR?: {
   }[],
                                                            
}
export interface grace_DateTimeFilter {
   in?: {
   }[],
                 lt?: string
                 lte?: string
                           notIn?: {
   }[],
                 equals?: string
                 gt?: string
                 gte?: string
            
}
export interface grace_NestedDateTimeFilter {
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
export interface grace_PromptListRelationFilter {
                                    
}
export interface grace_StringFilter {
     endsWith?: string
                 equals?: string
                 gte?: string
               in?: {
   }[],
                 lt?: string
                 contains?: string
                 gt?: string
                 lte?: string
                           notIn?: {
   }[],
                 startsWith?: string
            
}
export interface grace_ChatMessageListRelationFilter {
                                    
}
export interface grace_ChatMessageWhereInput {
                           OR?: {
   }[],
                                                                                    
}
export interface grace_PromptWhereInput {
                                                                           OR?: {
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
    data?: {
        updatedAt?: string
        createdAt?: string
        id?: number
        title?: string
    }[],
      total?: number
}

    
export interface ChatGPT__Chat__GetManyChatMessageResponse {
    data?: ChatGPT__Chat__GetManyChatMessageResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface ChatGPT__Chat__GetManyChatMessageResponseData {
    data?: {
        chatId?: number
        createdAt?: string
        id?: number
        parentMessageId?: string
        text?: string
    }[],
}export interface ChatGPT__Chat__UpdateOneHistoryInput {
     id: number
                 title?: string
            
}
export interface InternalChatGPT__Chat__UpdateOneHistoryInput {
      title?: string
      id: number
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
        updatedAt?: string
        createdAt?: string
        id?: number
        title?: string
    },
}export interface ChatGPT__Propmt__CreateOnePromptInput {
     prompt: string
                 title: string
            
}
export interface InternalChatGPT__Propmt__CreateOnePromptInput {
      updatedAt?: string
      prompt: string
      title: string
}
export interface InjectedChatGPT__Propmt__CreateOnePromptInput {
     prompt: string
         title: string
         updatedAt: string
    
}


    
export interface ChatGPT__Propmt__CreateOnePromptResponse {
    data?: ChatGPT__Propmt__CreateOnePromptResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface ChatGPT__Propmt__CreateOnePromptResponseData {
    data?: {
        updatedAt?: string
        createdAt?: string
        id?: number
        prompt?: string
        title?: string
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
                 skip?: number
                 take?: number
               orderBy?: {
   }[],
            
}
export interface InternalChatGPT__Propmt__GetPromptListInput {
    orderBy?: {
    }[],
      skip?: number
      take?: number
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
export interface grace_NestedIntFilter {
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
export interface grace_PromptOrderByWithRelationInput {
     updatedAt?: string
                 userId?: string
                             createdAt?: string
                 id?: string
                 prompt?: string
                 title?: string
            
}
export interface grace_PromptWhereInput {
                           OR?: {
   }[],
                                                                                                
}
export interface grace_UserRelationFilter {
                        
}
export interface grace_ChatMessageListRelationFilter {
                                    
}
export interface grace_DateTimeFilter {
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
export interface grace_HistoryListRelationFilter {
                                    
}
export interface grace_NestedStringNullableFilter {
     contains?: string
                 endsWith?: string
                 gt?: string
                 gte?: string
                 lt?: string
                 startsWith?: string
                 equals?: string
               in?: {
   }[],
                 lte?: string
                           notIn?: {
   }[],
            
}
export interface grace_UserOrderByWithRelationInput {
                             avatar?: string
                 bio?: string
                 createdAt?: string
                 id?: string
                 name?: string
                 provider?: string
            
}
export interface grace_NestedDateTimeNullableFilter {
     lte?: string
                           notIn?: {
   }[],
                 equals?: string
                 gt?: string
                 gte?: string
               in?: {
   }[],
                 lt?: string
            
}
export interface grace_PromptOrderByRelationAggregateInput {
     _count?: string
            
}
export interface grace_StringFilter {
     lt?: string
                 lte?: string
                 startsWith?: string
                 gt?: string
                 gte?: string
                 equals?: string
               in?: {
   }[],
                           notIn?: {
   }[],
                 contains?: string
                 endsWith?: string
            
}
export interface grace_StringNullableFilter {
     endsWith?: string
                 equals?: string
                 gt?: string
                 gte?: string
               in?: {
   }[],
                           notIn?: {
   }[],
                 contains?: string
                 lte?: string
                 startsWith?: string
                 lt?: string
            
}
export interface grace_PromptListRelationFilter {
                                    
}
export interface grace_UserWhereInput {
                                                                           OR?: {
   }[],
                                                            
}
export interface grace_ChatMessageWhereInput {
                                                                           OR?: {
   }[],
                                    
}
export interface grace_DateTimeNullableFilter {
     lte?: string
                           notIn?: {
   }[],
                 equals?: string
                 gt?: string
                 gte?: string
               in?: {
   }[],
                 lt?: string
            
}
export interface grace_HistoryOrderByRelationAggregateInput {
     _count?: string
            
}
export interface grace_HistoryWhereInput {
                           OR?: {
   }[],
                                                                                                
}
export interface grace_NestedDateTimeFilter {
     gte?: string
               in?: {
   }[],
                 lt?: string
                 lte?: string
                           notIn?: {
   }[],
                 equals?: string
                 gt?: string
            
}
export interface grace_NestedStringFilter {
   in?: {
   }[],
                 lte?: string
                           notIn?: {
   }[],
                 gt?: string
                 gte?: string
                 equals?: string
                 lt?: string
                 startsWith?: string
                 contains?: string
                 endsWith?: string
            
}
export interface InjectedChatGPT__Propmt__GetPromptListInput {
         skip?: number
         take?: number
       orderBy?: {
   }[],
    
}


    
export interface ChatGPT__Propmt__GetPromptListResponse {
    data?: ChatGPT__Propmt__GetPromptListResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface ChatGPT__Propmt__GetPromptListResponseData {
      total?: number
    data?: {
        createdAt?: string
        id?: number
        prompt?: string
        title?: string
        updatedAt?: string
    }[],
}export interface ChatGPT__Propmt__UpdateOnePromptInput {
     id: number
                 prompt?: string
                 title?: string
            
}
export interface InternalChatGPT__Propmt__UpdateOnePromptInput {
      id: number
      prompt?: string
      title?: string
      updatedAt?: string
}
export interface InjectedChatGPT__Propmt__UpdateOnePromptInput {
     title?: string
         updatedAt: string
         id: number
         prompt?: string
    
}


    
export interface ChatGPT__Propmt__UpdateOnePromptResponse {
    data?: ChatGPT__Propmt__UpdateOnePromptResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface ChatGPT__Propmt__UpdateOnePromptResponseData {
    data?: {
        id?: number
        prompt?: string
        title?: string
        updatedAt?: string
        createdAt?: string
    },
}export interface User__CreateOneUserInput {
     id: string
                 name: string
                 provider?: string
                 avatar: string
                 bio: string
            
}
export interface InternalUser__CreateOneUserInput {
      avatar: string
      bio: string
      id: string
      name: string
      provider?: string
}
export interface InjectedUser__CreateOneUserInput {
     avatar: string
         bio: string
         id: string
         name: string
         provider?: string
    
}


    
export interface User__CreateOneUserResponse {
    data?: User__CreateOneUserResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface User__CreateOneUserResponseData {
    data?: {
        id?: string
    },
}export interface User__GetOneUserInput {
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
    errors?: ReadonlyArray<GraphQLError>;
}
export interface User__GetOneUserResponseData {
    data?: {
        avatar?: string
        bio?: string
        id?: string
        name?: string
    },
}export interface ChatGPT__Subscription__ChatSSEInput {
     prompt: string
                 chatId?: string
                 regenerateId?: string
            
}
export interface InternalChatGPT__Subscription__ChatSSEInput {
      prompt: string
      chatId?: string
      regenerateId?: string
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