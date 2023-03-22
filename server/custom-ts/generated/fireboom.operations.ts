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
        "Chat/CreateOne"?: CustomizeMutation;
        "Chat/DeleteOne"?: CustomizeMutation;
        "Chat/GetByHistory"?: CustomizeQuery;
        "Chat/GetList"?: CustomizeQuery;
        "Chat/UpdateChatText"?: CustomizeMutation;
        "History/CreateOne"?: CustomizeMutation;
        "History/DeleteOne"?: CustomizeMutation;
        "History/GetList"?: CustomizeQuery;
        "History/UpdateOne"?: CustomizeMutation;
        "Propmt/CreateOne"?: CustomizeMutation;
        "Propmt/DeleteMany"?: CustomizeMutation;
        "Propmt/DeleteOne"?: CustomizeMutation;
        "Propmt/GetList"?: CustomizeQuery;
        "Propmt/UpdateOne"?: CustomizeMutation;
        "User/CreateOneUser"?: CustomizeMutation;
        "User/GetOneUser"?: CustomizeQuery;
        "User/Me"?: CustomizeQuery;
        "User/UpdateInfo"?: CustomizeMutation;
        "Chat/ChatSSE"?: CustomizeSubscription;
    }
}