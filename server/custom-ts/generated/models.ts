export interface ChatGPT__Chat__CreateOneChatMessageInput {
     chatId: string
                 parentMessageId?: string
                 text: string
            
}
export interface InternalChatGPT__Chat__CreateOneChatMessageInput {
      parentMessageId?: string
      text: string
      chatId: string
}
export interface InjectedChatGPT__Chat__CreateOneChatMessageInput {
     parentMessageId?: string
         text: string
         chatId: string
    
}


    
export interface ChatGPT__Chat__CreateOneChatMessageResponse {
    data?: ChatGPT__Chat__CreateOneChatMessageResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface ChatGPT__Chat__CreateOneChatMessageResponseData {
    data?: {
        id?: number
        parentMessageId?: string
        text?: string
        chatId?: string
        createdAt?: string
    },
}export interface ChatGPT__Chat__CreateOneHistoryInput {
     uuid: string
                 title: string
            
}
export interface InternalChatGPT__Chat__CreateOneHistoryInput {
      title: string
      updatedAt?: string
      uuid: string
}
export interface InjectedChatGPT__Chat__CreateOneHistoryInput {
     title: string
         updatedAt: string
         uuid: string
    
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
        uuid?: string
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
export interface grace_NestedDateTimeNullableFilter {
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
export interface grace_NestedStringFilter {
     endsWith?: string
                 gt?: string
                 lt?: string
                 lte?: string
                 startsWith?: string
                 contains?: string
                 gte?: string
               in?: {
   }[],
                           notIn?: {
   }[],
                 equals?: string
            
}
export interface grace_StringFilter {
     lt?: string
                 lte?: string
               notIn?: {
   }[],
                 startsWith?: string
                 endsWith?: string
                 gte?: string
               in?: {
   }[],
                             contains?: string
                 equals?: string
                 gt?: string
            
}
export interface grace_HistoryWhereInput {
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
export interface grace_DateTimeNullableFilter {
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
export interface grace_HistoryOrderByWithRelationInput {
     createdAt?: string
                 id?: string
                 title?: string
                 updatedAt?: string
                 uuid?: string
            
}
export interface grace_NestedBigIntFilter {
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
export interface grace_BigIntFilter {
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
export interface InjectedChatGPT__Chat__GetHistoryListInput {
         skip?: number
         take?: number
       orderBy?: {
   }[],
    
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
        uuid?: string
    }[],
      total?: number
}

    
export interface ChatGPT__Chat__GetManyChatMessageResponse {
    data?: ChatGPT__Chat__GetManyChatMessageResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface ChatGPT__Chat__GetManyChatMessageResponseData {
    data?: {
        chatId?: string
        createdAt?: string
        id?: number
        parentMessageId?: string
        text?: string
    }[],
}export interface ChatGPT__Chat__UpdateOneHistoryInput {
     uuid?: string
                 id: number
                 title?: string
            
}
export interface InternalChatGPT__Chat__UpdateOneHistoryInput {
      updatedAt?: string
      uuid?: string
      id: number
      title?: string
}
export interface InjectedChatGPT__Chat__UpdateOneHistoryInput {
     id: number
         title?: string
         updatedAt: string
         uuid?: string
    
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
        uuid?: string
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
   orderBy?: {
   }[],
                             skip?: number
                 take?: number
            
}
export interface InternalChatGPT__Propmt__GetPromptListInput {
    orderBy?: {
    }[],
      skip?: number
      take?: number
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
export interface grace_PromptOrderByWithRelationInput {
     createdAt?: string
                 id?: string
                 prompt?: string
                 title?: string
                 updatedAt?: string
            
}
export interface grace_StringFilter {
     contains?: string
                 gte?: string
               in?: {
   }[],
                 lte?: string
               notIn?: {
   }[],
                 startsWith?: string
                 endsWith?: string
                 equals?: string
                 gt?: string
                 lt?: string
                        
}
export interface grace_DateTimeNullableFilter {
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
export interface grace_NestedDateTimeNullableFilter {
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
export interface grace_NestedStringFilter {
     startsWith?: string
                 contains?: string
                 endsWith?: string
                 equals?: string
                 gt?: string
                 gte?: string
                 lte?: string
                           in?: {
   }[],
                 lt?: string
               notIn?: {
   }[],
            
}
export interface grace_PromptWhereInput {
               OR?: {
   }[],
                                                                                    
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
      title?: string
      updatedAt?: string
      id: number
      prompt?: string
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
        updatedAt?: string
        createdAt?: string
        id?: number
        prompt?: string
        title?: string
    },
}
export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export interface GraphQLError {
    message: string;
    path?: ReadonlyArray<string | number>;
}