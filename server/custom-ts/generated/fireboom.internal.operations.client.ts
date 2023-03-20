
import type { OperationsClientType } from 'fireboom-wundersdk/server'
import { ChatGPT__Chat__CreateOneChatMessageInput,InternalChatGPT__Chat__CreateOneChatMessageInput,ChatGPT__Chat__CreateOneChatMessageResponse,ChatGPT__Chat__CreateOneHistoryInput,InternalChatGPT__Chat__CreateOneHistoryInput,ChatGPT__Chat__CreateOneHistoryResponse,ChatGPT__Chat__DeleteOneChatMessageInput,InternalChatGPT__Chat__DeleteOneChatMessageInput,ChatGPT__Chat__DeleteOneChatMessageResponse,ChatGPT__Chat__DeleteOneHistoryInput,InternalChatGPT__Chat__DeleteOneHistoryInput,ChatGPT__Chat__DeleteOneHistoryResponse,ChatGPT__Chat__GetHistoryListInput,InternalChatGPT__Chat__GetHistoryListInput,ChatGPT__Chat__GetHistoryListResponse,ChatGPT__Chat__GetManyChatMessageResponse,ChatGPT__Chat__UpdateOneHistoryInput,InternalChatGPT__Chat__UpdateOneHistoryInput,ChatGPT__Chat__UpdateOneHistoryResponse,ChatGPT__Propmt__CreateOnePromptInput,InternalChatGPT__Propmt__CreateOnePromptInput,ChatGPT__Propmt__CreateOnePromptResponse,ChatGPT__Propmt__DeleteManyPromptInput,InternalChatGPT__Propmt__DeleteManyPromptInput,ChatGPT__Propmt__DeleteManyPromptResponse,ChatGPT__Propmt__DeleteOnePromptInput,InternalChatGPT__Propmt__DeleteOnePromptInput,ChatGPT__Propmt__DeleteOnePromptResponse,ChatGPT__Propmt__GetPromptListInput,InternalChatGPT__Propmt__GetPromptListInput,ChatGPT__Propmt__GetPromptListResponse,ChatGPT__Propmt__UpdateOnePromptInput,InternalChatGPT__Propmt__UpdateOnePromptInput,ChatGPT__Propmt__UpdateOnePromptResponse, } from "./models"

export interface Queries {
  'ChatGPT/Chat/GetHistoryList':  { input: InternalChatGPT__Chat__GetHistoryListInput, response: ChatGPT__Chat__GetHistoryListResponse };
  'ChatGPT/Chat/GetManyChatMessage':  { input: never, response: ChatGPT__Chat__GetManyChatMessageResponse };
  'ChatGPT/Propmt/GetPromptList':  { input: InternalChatGPT__Propmt__GetPromptListInput, response: ChatGPT__Propmt__GetPromptListResponse };
}

export interface Mutations {
  'ChatGPT/Chat/CreateOneChatMessage':  { input: InternalChatGPT__Chat__CreateOneChatMessageInput, response: ChatGPT__Chat__CreateOneChatMessageResponse };
  'ChatGPT/Chat/CreateOneHistory':  { input: InternalChatGPT__Chat__CreateOneHistoryInput, response: ChatGPT__Chat__CreateOneHistoryResponse };
  'ChatGPT/Chat/DeleteOneChatMessage':  { input: InternalChatGPT__Chat__DeleteOneChatMessageInput, response: ChatGPT__Chat__DeleteOneChatMessageResponse };
  'ChatGPT/Chat/DeleteOneHistory':  { input: InternalChatGPT__Chat__DeleteOneHistoryInput, response: ChatGPT__Chat__DeleteOneHistoryResponse };
  'ChatGPT/Chat/UpdateOneHistory':  { input: InternalChatGPT__Chat__UpdateOneHistoryInput, response: ChatGPT__Chat__UpdateOneHistoryResponse };
  'ChatGPT/Propmt/CreateOnePrompt':  { input: InternalChatGPT__Propmt__CreateOnePromptInput, response: ChatGPT__Propmt__CreateOnePromptResponse };
  'ChatGPT/Propmt/DeleteManyPrompt':  { input: InternalChatGPT__Propmt__DeleteManyPromptInput, response: ChatGPT__Propmt__DeleteManyPromptResponse };
  'ChatGPT/Propmt/DeleteOnePrompt':  { input: InternalChatGPT__Propmt__DeleteOnePromptInput, response: ChatGPT__Propmt__DeleteOnePromptResponse };
  'ChatGPT/Propmt/UpdateOnePrompt':  { input: InternalChatGPT__Propmt__UpdateOnePromptInput, response: ChatGPT__Propmt__UpdateOnePromptResponse };
}

export interface Subscriptions {
}

export type InternalOperations = OperationsClientType<Queries, Mutations, Subscriptions>
