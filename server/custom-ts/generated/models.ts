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
        title?: string
        updatedAt?: string
        createdAt?: string
        id?: number
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
      skip?: number
      take?: number
    orderBy?: {
    }[],
}
export interface grace_HistoryOrderByWithRelationInput {
     createdAt?: string
                 id?: string
                 title?: string
                 updatedAt?: string
                        
}
export interface grace_NestedStringFilter {
     equals?: string
               in?: {
   }[],
                 lt?: string
                 lte?: string
                             contains?: string
                 endsWith?: string
                 gt?: string
                 gte?: string
               notIn?: {
   }[],
                 startsWith?: string
            
}
export interface grace_StringNullableFilter {
   notIn?: {
   }[],
                 equals?: string
                 gte?: string
                 lt?: string
               in?: {
   }[],
                 lte?: string
                             startsWith?: string
                 contains?: string
                 endsWith?: string
                 gt?: string
            
}
export interface grace_DateTimeNullableFilter {
     gt?: string
                 gte?: string
               in?: {
   }[],
                 lt?: string
                 lte?: string
                           notIn?: {
   }[],
                 equals?: string
            
}
export interface grace_ChatMessageOrderByRelationAggregateInput {
     _count?: string
            
}
export interface grace_IntFilter {
     lte?: number
                           notIn?: {
   }[],
                 equals?: number
                 gt?: number
                 gte?: number
               in?: {
   }[],
                 lt?: number
            
}
export interface grace_NestedStringNullableFilter {
   notIn?: {
   }[],
                 gte?: string
                 lt?: string
                 lte?: string
                           in?: {
   }[],
                 startsWith?: string
                 contains?: string
                 endsWith?: string
                 equals?: string
                 gt?: string
            
}
export interface grace_ChatMessageListRelationFilter {
                                    
}
export interface grace_HistoryWhereInput {
                                                               OR?: {
   }[],
                                    
}
export interface grace_DateTimeFilter {
     gt?: string
                 gte?: string
               in?: {
   }[],
                 lt?: string
                 lte?: string
                           notIn?: {
   }[],
                 equals?: string
            
}
export interface grace_HistoryRelationFilter {
                        
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
export interface grace_NestedDateTimeNullableFilter {
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
export interface grace_StringFilter {
     gte?: string
               in?: {
   }[],
                 lte?: string
               notIn?: {
   }[],
                 endsWith?: string
                 gt?: string
                 lt?: string
                             startsWith?: string
                 contains?: string
                 equals?: string
            
}
export interface grace_ChatMessageWhereInput {
                           OR?: {
   }[],
                                                                                    
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
        createdAt?: string
        id?: number
        title?: string
        updatedAt?: string
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
        prompt?: string
        title?: string
        updatedAt?: string
        createdAt?: string
        id?: number
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
     take?: number
               orderBy?: {
   }[],
                             skip?: number
            
}
export interface InternalChatGPT__Propmt__GetPromptListInput {
    orderBy?: {
    }[],
      skip?: number
      take?: number
}
export interface grace_DateTimeNullableFilter {
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
     equals?: string
                 gt?: string
                 gte?: string
               in?: {
   }[],
                 lte?: string
                             startsWith?: string
                 contains?: string
                 lt?: string
               notIn?: {
   }[],
                 endsWith?: string
            
}
export interface grace_StringFilter {
     lte?: string
                             startsWith?: string
                 contains?: string
                 endsWith?: string
                 gte?: string
               in?: {
   }[],
                 lt?: string
               notIn?: {
   }[],
                 equals?: string
                 gt?: string
            
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
export interface grace_IntFilter {
     equals?: number
                 gt?: number
                 gte?: number
               in?: {
   }[],
                 lt?: number
                 lte?: number
                           notIn?: {
   }[],
            
}
export interface grace_NestedDateTimeFilter {
     gt?: string
                 gte?: string
               in?: {
   }[],
                 lt?: string
                 lte?: string
                           notIn?: {
   }[],
                 equals?: string
            
}
export interface grace_NestedDateTimeNullableFilter {
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
export interface grace_PromptOrderByWithRelationInput {
     title?: string
                 updatedAt?: string
                 createdAt?: string
                 id?: string
                 prompt?: string
            
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
        updatedAt?: string
        createdAt?: string
        id?: number
        prompt?: string
        title?: string
    }[],
      total?: number
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
}
export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export interface GraphQLError {
    message: string;
    path?: ReadonlyArray<string | number>;
}