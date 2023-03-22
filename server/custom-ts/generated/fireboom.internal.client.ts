import type { OperationArgsWithInput, InternalClient as BaseClient  } from 'fireboom-wundersdk/server'
import { Chat__CreateOneInput,InternalChat__CreateOneInput,Chat__CreateOneResponse,Chat__DeleteOneInput,InternalChat__DeleteOneInput,Chat__DeleteOneResponse,Chat__GetByHistoryInput,InternalChat__GetByHistoryInput,Chat__GetByHistoryResponse,Chat__GetListResponse,Chat__UpdateChatTextInput,InternalChat__UpdateChatTextInput,Chat__UpdateChatTextResponse,History__CreateOneInput,InternalHistory__CreateOneInput,History__CreateOneResponse,History__DeleteOneInput,InternalHistory__DeleteOneInput,History__DeleteOneResponse,InternalHistory__GetListInput,History__GetListResponse,History__UpdateOneInput,InternalHistory__UpdateOneInput,History__UpdateOneResponse,Propmt__CreateOneInput,InternalPropmt__CreateOneInput,Propmt__CreateOneResponse,Propmt__DeleteManyInput,InternalPropmt__DeleteManyInput,Propmt__DeleteManyResponse,Propmt__DeleteOneInput,InternalPropmt__DeleteOneInput,Propmt__DeleteOneResponse,Propmt__GetListInput,InternalPropmt__GetListInput,Propmt__GetListResponse,Propmt__UpdateOneInput,InternalPropmt__UpdateOneInput,Propmt__UpdateOneResponse,User__CreateOneUserInput,InternalUser__CreateOneUserInput,User__CreateOneUserResponse,User__GetOneUserInput,InternalUser__GetOneUserInput,User__GetOneUserResponse,InternalUser__MeInput,User__MeResponse,User__UpdateInfoInput,InternalUser__UpdateInfoInput,User__UpdateInfoResponse,Chat__ChatSSEInput,InternalChat__ChatSSEInput,Chat__ChatSSEResponse, } from './models'

export interface Queries {
  'Chat__GetByHistory': (options: OperationArgsWithInput<InternalChat__GetByHistoryInput>) => Promise<Chat__GetByHistoryResponse>;
  'Chat__GetList': () => Promise<Chat__GetListResponse>;
  'History__GetList': (options: OperationArgsWithInput<InternalHistory__GetListInput>) => Promise<History__GetListResponse>;
  'Propmt__GetList': (options: OperationArgsWithInput<InternalPropmt__GetListInput>) => Promise<Propmt__GetListResponse>;
  'User__GetOneUser': (options: OperationArgsWithInput<InternalUser__GetOneUserInput>) => Promise<User__GetOneUserResponse>;
  'User__Me': (options: OperationArgsWithInput<InternalUser__MeInput>) => Promise<User__MeResponse>;
}

export interface Mutations {
  'Chat__CreateOne': (options: OperationArgsWithInput<InternalChat__CreateOneInput>) => Promise<Chat__CreateOneResponse>;
  'Chat__DeleteOne': (options: OperationArgsWithInput<InternalChat__DeleteOneInput>) => Promise<Chat__DeleteOneResponse>;
  'Chat__UpdateChatText': (options: OperationArgsWithInput<InternalChat__UpdateChatTextInput>) => Promise<Chat__UpdateChatTextResponse>;
  'History__CreateOne': (options: OperationArgsWithInput<InternalHistory__CreateOneInput>) => Promise<History__CreateOneResponse>;
  'History__DeleteOne': (options: OperationArgsWithInput<InternalHistory__DeleteOneInput>) => Promise<History__DeleteOneResponse>;
  'History__UpdateOne': (options: OperationArgsWithInput<InternalHistory__UpdateOneInput>) => Promise<History__UpdateOneResponse>;
  'Propmt__CreateOne': (options: OperationArgsWithInput<InternalPropmt__CreateOneInput>) => Promise<Propmt__CreateOneResponse>;
  'Propmt__DeleteMany': (options: OperationArgsWithInput<InternalPropmt__DeleteManyInput>) => Promise<Propmt__DeleteManyResponse>;
  'Propmt__DeleteOne': (options: OperationArgsWithInput<InternalPropmt__DeleteOneInput>) => Promise<Propmt__DeleteOneResponse>;
  'Propmt__UpdateOne': (options: OperationArgsWithInput<InternalPropmt__UpdateOneInput>) => Promise<Propmt__UpdateOneResponse>;
  'User__CreateOneUser': (options: OperationArgsWithInput<InternalUser__CreateOneUserInput>) => Promise<User__CreateOneUserResponse>;
  'User__UpdateInfo': (options: OperationArgsWithInput<InternalUser__UpdateInfoInput>) => Promise<User__UpdateInfoResponse>;
}

export interface InternalClient extends BaseClient<Queries, Mutations> {}
