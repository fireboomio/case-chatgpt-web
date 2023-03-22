
import type { OperationsClientType } from 'fireboom-wundersdk/server'
import { Chat__CreateOneInput,InternalChat__CreateOneInput,Chat__CreateOneResponse,Chat__DeleteOneInput,InternalChat__DeleteOneInput,Chat__DeleteOneResponse,Chat__GetByHistoryInput,InternalChat__GetByHistoryInput,Chat__GetByHistoryResponse,Chat__GetListResponse,Chat__UpdateChatTextInput,InternalChat__UpdateChatTextInput,Chat__UpdateChatTextResponse,History__CreateOneInput,InternalHistory__CreateOneInput,History__CreateOneResponse,History__DeleteOneInput,InternalHistory__DeleteOneInput,History__DeleteOneResponse,InternalHistory__GetListInput,History__GetListResponse,History__UpdateOneInput,InternalHistory__UpdateOneInput,History__UpdateOneResponse,Propmt__CreateOneInput,InternalPropmt__CreateOneInput,Propmt__CreateOneResponse,Propmt__DeleteManyInput,InternalPropmt__DeleteManyInput,Propmt__DeleteManyResponse,Propmt__DeleteOneInput,InternalPropmt__DeleteOneInput,Propmt__DeleteOneResponse,Propmt__GetListInput,InternalPropmt__GetListInput,Propmt__GetListResponse,Propmt__UpdateOneInput,InternalPropmt__UpdateOneInput,Propmt__UpdateOneResponse,User__CreateOneUserInput,InternalUser__CreateOneUserInput,User__CreateOneUserResponse,User__GetOneUserInput,InternalUser__GetOneUserInput,User__GetOneUserResponse,InternalUser__MeInput,User__MeResponse,User__UpdateInfoInput,InternalUser__UpdateInfoInput,User__UpdateInfoResponse,Chat__ChatSSEInput,InternalChat__ChatSSEInput,Chat__ChatSSEResponse, } from "./models"

export interface Queries {
  'Chat__GetByHistory':  { input: InternalChat__GetByHistoryInput, response: Chat__GetByHistoryResponse };
  'Chat__GetList':  { input: never, response: Chat__GetListResponse };
  'History__GetList':  { input: InternalHistory__GetListInput, response: History__GetListResponse };
  'Propmt__GetList':  { input: InternalPropmt__GetListInput, response: Propmt__GetListResponse };
  'User__GetOneUser':  { input: InternalUser__GetOneUserInput, response: User__GetOneUserResponse };
  'User__Me':  { input: InternalUser__MeInput, response: User__MeResponse };
}

export interface Mutations {
  'Chat__CreateOne':  { input: InternalChat__CreateOneInput, response: Chat__CreateOneResponse };
  'Chat__DeleteOne':  { input: InternalChat__DeleteOneInput, response: Chat__DeleteOneResponse };
  'Chat__UpdateChatText':  { input: InternalChat__UpdateChatTextInput, response: Chat__UpdateChatTextResponse };
  'History__CreateOne':  { input: InternalHistory__CreateOneInput, response: History__CreateOneResponse };
  'History__DeleteOne':  { input: InternalHistory__DeleteOneInput, response: History__DeleteOneResponse };
  'History__UpdateOne':  { input: InternalHistory__UpdateOneInput, response: History__UpdateOneResponse };
  'Propmt__CreateOne':  { input: InternalPropmt__CreateOneInput, response: Propmt__CreateOneResponse };
  'Propmt__DeleteMany':  { input: InternalPropmt__DeleteManyInput, response: Propmt__DeleteManyResponse };
  'Propmt__DeleteOne':  { input: InternalPropmt__DeleteOneInput, response: Propmt__DeleteOneResponse };
  'Propmt__UpdateOne':  { input: InternalPropmt__UpdateOneInput, response: Propmt__UpdateOneResponse };
  'User__CreateOneUser':  { input: InternalUser__CreateOneUserInput, response: User__CreateOneUserResponse };
  'User__UpdateInfo':  { input: InternalUser__UpdateInfoInput, response: User__UpdateInfoResponse };
}

export interface Subscriptions {
  'Chat__ChatSSE':  { input: InternalChat__ChatSSEInput, response: Chat__ChatSSEResponse };
}

export type InternalOperations = OperationsClientType<Queries, Mutations, Subscriptions>
