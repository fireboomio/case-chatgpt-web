import type {
    BaseOperationConfiguration,
    ConfigureQuery,
    ConfigureSubscription,
    ConfigureMutation,
    CustomizeQuery,
    CustomizeMutation,
    CustomizeSubscription,
} from "fireboom-wundersdk"

export interface OperationsConfiguration {
    // defaultConfig is the base for all configurations
    // all configuration shared across queries, mutations and subscriptions can be done in the default config
    defaultConfig: BaseOperationConfiguration;

    // queries lets you define the base config for all Queries
    // the input config is the defaultConfig object
    queries: ConfigureQuery;

    mutations: ConfigureMutation;
    subscriptions: ConfigureSubscription;

    // custom allows you to override settings for each individual operation
    // the input config is the default config + the query/mutation/subscription extra config
    custom?: {
        "ChatGPT/Chat/CreateOneChatMessage"?: CustomizeMutation;
        "ChatGPT/Chat/CreateOneHistory"?: CustomizeMutation;
        "ChatGPT/Chat/DeleteOneChatMessage"?: CustomizeMutation;
        "ChatGPT/Chat/DeleteOneHistory"?: CustomizeMutation;
        "ChatGPT/Chat/GetHistoryList"?: CustomizeQuery;
        "ChatGPT/Chat/GetManyChatMessage"?: CustomizeQuery;
        "ChatGPT/Chat/UpdateOneHistory"?: CustomizeMutation;
        "ChatGPT/Propmt/CreateOnePrompt"?: CustomizeMutation;
        "ChatGPT/Propmt/DeleteManyPrompt"?: CustomizeMutation;
        "ChatGPT/Propmt/DeleteOnePrompt"?: CustomizeMutation;
        "ChatGPT/Propmt/GetPromptList"?: CustomizeQuery;
        "ChatGPT/Propmt/UpdateOnePrompt"?: CustomizeMutation;
        "User/CreateOneUser"?: CustomizeMutation;
        "User/GetOneUser"?: CustomizeQuery;
        "ChatGPT/Subscription/ChatSSE"?: CustomizeSubscription;
    }
}