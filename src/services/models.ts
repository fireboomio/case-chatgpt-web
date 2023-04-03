// @ts-nocheck
import type function_Chat__ChatSSE from '../../server/custom-ts/operations/Chat/ChatSSE'

import type { ExtractResponse } from 'fireboom-wundersdk/operations'
export interface Chat__CreateOneInput {
     chatId: number
                 parentMessageId?: number
                 text: string
            
}
export interface InternalChat__CreateOneInput {
      chatId: number
      parentMessageId?: number
      text: string
}
    export interface InjectedChat__CreateOneInput {
     chatId: number
         parentMessageId?: number
         text: string
    
}


    
export interface Chat__CreateOneResponse {
    data?: Chat__CreateOneResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Chat__CreateOneResponseData {
    data?: {
        text?: string
        chatId?: number
        createdAt?: string
        id?: number
        parentMessageId?: number
    },
}
export interface Chat__DeleteOneInput {
     id: number
            
}
export interface InternalChat__DeleteOneInput {
      id: number
}
    export interface InjectedChat__DeleteOneInput {
     id: number
    
}


    
export interface Chat__DeleteOneResponse {
    data?: Chat__DeleteOneResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Chat__DeleteOneResponseData {
    data?: {
        id?: number
    },
}
export interface Chat__GetByHistoryInput {
     historyId: number
            
}
export interface InternalChat__GetByHistoryInput {
      historyId: number
}
    export interface InjectedChat__GetByHistoryInput {
     historyId: number
    
}


    
export interface Chat__GetByHistoryResponse {
    data?: Chat__GetByHistoryResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Chat__GetByHistoryResponseData {
    data?: {
        text?: string
        id?: number
        parentMessageId?: number
    }[],
}
export interface Chat__GetMyHistoryChatsInput {
     chatId: number
            
}
export interface InternalChat__GetMyHistoryChatsInput {
      userId?: string
      chatId: number
}
    export interface InjectedChat__GetMyHistoryChatsInput {
     chatId: number
         userId: string
    
}


    
export interface Chat__GetMyHistoryChatsResponse {
    data?: Chat__GetMyHistoryChatsResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Chat__GetMyHistoryChatsResponseData {
    data?: {
        id?: number
        parentMessageId?: number
        text?: string
        createdAt?: string
    }[],
}
export interface Chat__UpdateChatTextInput {
     id: number
                 text: string
            
}
export interface InternalChat__UpdateChatTextInput {
      id: number
      text: string
}
    export interface InjectedChat__UpdateChatTextInput {
     id: number
         text: string
    
}


    
export interface Chat__UpdateChatTextResponse {
    data?: Chat__UpdateChatTextResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Chat__UpdateChatTextResponseData {
    data?: {
        id?: number
    },
}
export interface History__CreateOneInput {
     title: string
            
}
export interface InternalHistory__CreateOneInput {
      title: string
      userId?: string
}
    export interface InjectedHistory__CreateOneInput {
     title: string
         userId: string
    
}


    
export interface History__CreateOneResponse {
    data?: History__CreateOneResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface History__CreateOneResponseData {
    data?: {
        updatedAt?: string
        createdAt?: string
        id?: number
        title?: string
    },
}
export interface History__DeleteOneInput {
     id: number
            
}
export interface InternalHistory__DeleteOneInput {
      id: number
}
    export interface InjectedHistory__DeleteOneInput {
     id: number
    
}


    
export interface History__DeleteOneResponse {
    data?: History__DeleteOneResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface History__DeleteOneResponseData {
    data?: {
        id?: number
    },
}
export interface InternalHistory__GetListInput {
      userId?: string
}
    export interface InjectedHistory__GetListInput {
     userId: string
    
}


    
export interface History__GetListResponse {
    data?: History__GetListResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface History__GetListResponseData {
    data?: {
        createdAt?: string
        id?: number
        title?: string
        updatedAt?: string
    }[],
}
export interface History__UpdateOneInput {
     id: number
                 title?: string
            
}
export interface InternalHistory__UpdateOneInput {
      id: number
      title?: string
}
    export interface InjectedHistory__UpdateOneInput {
     title?: string
         id: number
    
}


    
export interface History__UpdateOneResponse {
    data?: History__UpdateOneResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface History__UpdateOneResponseData {
    data?: {
        createdAt?: string
        id?: number
        title?: string
        updatedAt?: string
    },
}
export interface Propmt__CreateOneInput {
     prompt: string
                 title: string
            
}
export interface InternalPropmt__CreateOneInput {
      prompt: string
      title: string
      userId?: string
}
    export interface InjectedPropmt__CreateOneInput {
     prompt: string
         title: string
         userId: string
    
}


    
export interface Propmt__CreateOneResponse {
    data?: Propmt__CreateOneResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Propmt__CreateOneResponseData {
    data?: {
        createdAt?: string
        id?: number
        prompt?: string
        title?: string
        updatedAt?: string
    },
}
export interface Propmt__DeleteManyInput {
   ids: {
   }[],
            
}
export interface InternalPropmt__DeleteManyInput {
    ids: {
    }[],
}
    export interface InjectedPropmt__DeleteManyInput {
   ids: {
   }[],
    
}


    
export interface Propmt__DeleteManyResponse {
    data?: Propmt__DeleteManyResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Propmt__DeleteManyResponseData {
    data?: {
        count?: number
    },
}
export interface Propmt__DeleteOneInput {
     id: number
            
}
export interface InternalPropmt__DeleteOneInput {
      id: number
}
    export interface InjectedPropmt__DeleteOneInput {
     id: number
    
}


    
export interface Propmt__DeleteOneResponse {
    data?: Propmt__DeleteOneResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Propmt__DeleteOneResponseData {
    data?: {
        id?: number
    },
}
export interface Propmt__GetListInput {
     take?: number
               orderBy?: {
   }[],
                             skip?: number
            
}
export interface InternalPropmt__GetListInput {
    orderBy?: {
    }[],
      skip?: number
      take?: number
}
    export interface InjectedPropmt__GetListInput {
         skip?: number
         take?: number
       orderBy?: {
   }[],
    
}


    
export interface Propmt__GetListResponse {
    data?: Propmt__GetListResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Propmt__GetListResponseData {
    data?: {
        createdAt?: string
        id?: number
        prompt?: string
        title?: string
        updatedAt?: string
    }[],
      total?: number
}
export interface Propmt__UpdateOneInput {
     id: number
                 prompt?: string
                 title?: string
            
}
export interface InternalPropmt__UpdateOneInput {
      id: number
      prompt?: string
      title?: string
      updatedAt?: string
}
    export interface InjectedPropmt__UpdateOneInput {
     id: number
         prompt?: string
         title?: string
         updatedAt: string
    
}


    
export interface Propmt__UpdateOneResponse {
    data?: Propmt__UpdateOneResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface Propmt__UpdateOneResponseData {
    data?: {
        title?: string
        updatedAt?: string
        createdAt?: string
        id?: number
        prompt?: string
    },
}
export interface System__BindRoleApisInput {
     roleCode: string
               allRoles: {
   }[],
               apis: {
   }[],
            
}
export interface InternalSystem__BindRoleApisInput {
    allRoles: {
    }[],
    apis: {
    }[],
      roleCode: string
}
    export interface InjectedSystem__BindRoleApisInput {
   allRoles: {
   }[],
       apis: {
   }[],
         roleCode: string
    
}


    
export interface System__BindRoleApisResponse {
    data?: System__BindRoleApisResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface System__BindRoleApisResponseData {
    data?: {
        count?: number
    },
}
export interface System__GetRoleBindApisInput {
     code: string
            
}
export interface InternalSystem__GetRoleBindApisInput {
      code: string
}
    export interface InjectedSystem__GetRoleBindApisInput {
     code: string
    
}


    
export interface System__GetRoleBindApisResponse {
    data?: System__GetRoleBindApisResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface System__GetRoleBindApisResponseData {
    data?: {
        operationType?: string
        content?: string
        deleteTime?: string
        method?: string
        updateTime?: string
        createTime?: string
        id?: number
        restUrl?: string
        title?: string
        roleType?: string
        roles?: string
        remark?: string
    }[],
}
export interface User__CreateOneUserInput {
     name: string
                 provider?: string
                 providerId?: string
                 avatar: string
                 description: string
                 id: string
            
}
export interface InternalUser__CreateOneUserInput {
      id: string
      name: string
      provider?: string
      providerId?: string
      avatar: string
      description: string
}
    export interface InjectedUser__CreateOneUserInput {
     avatar: string
         description: string
         id: string
         name: string
         provider?: string
         providerId?: string
    
}


    
export interface User__CreateOneUserResponse {
    data?: User__CreateOneUserResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface User__CreateOneUserResponseData {
    data?: {
        id?: string
    },
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
    errors?: ReadonlyArray<GraphQLError>;
}
export interface User__GetOneUserResponseData {
    data?: {
        avatar?: string
        description?: string
        id?: string
        name?: string
    },
}
export interface InternalUser__MeInput {
      equals?: string
}
    export interface InjectedUser__MeInput {
     equals: string
    
}


    
export interface User__MeResponse {
    data?: User__MeResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface User__MeResponseData {
    data?: {
        avatar?: string
        description?: string
        id?: string
        name?: string
    },
}
export interface User__UpdateInfoInput {
     name?: string
                 avatar?: string
                 description?: string
            
}
export interface InternalUser__UpdateInfoInput {
      id?: string
      name?: string
      avatar?: string
      description?: string
}
    export interface InjectedUser__UpdateInfoInput {
     avatar?: string
         description?: string
         id: string
         name?: string
    
}


    
export interface User__UpdateInfoResponse {
    data?: User__UpdateInfoResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
export interface User__UpdateInfoResponseData {
    data?: {
        id?: string
        name?: string
        avatar?: string
        description?: string
    },
}
export interface Chat__ChatSSEInput {
     prompt: string
                             regenerateId?: string
            
}
export interface InternalChat__ChatSSEInput {
      prompt: string
      regenerateId?: string
}
    

export type Chat__ChatSSEResponseData = ExtractResponse<typeof function_Chat__ChatSSE>

export interface Chat__ChatSSEResponse {
    data?: Chat__ChatSSEResponseData
    errors?: ReadonlyArray<GraphQLError>;
}
    
export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export interface GraphQLError {
    message: string;
    path?: ReadonlyArray<string | number>;
}
