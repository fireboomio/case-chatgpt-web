export interface LinkDefinition {
    targetType: string;
    targetFieldName: string;
    sourceField: string;
    argumentSources: LinkFieldArgumentSourceDefinition[];
}

export interface LinkFieldArgumentSourceDefinition {
    name: string;
    type: "objectField" | "fieldArgument";
    path: string[];
}

class LinkBuilder<T, R extends {} = {},TT = {}> {

    // @ts-ignore
    constructor(current: R = {}, sourceField: string, targetType: string, targetField: string) {
        this.current = current;
        this.sourceField = sourceField;
        this.targetType = targetType;
        this.targetField = targetField;
    }

    private readonly sourceField: string;
    private readonly targetType: string;
    private readonly targetField: string;

    // @ts-ignore
    private current: R = {};

    argument<P extends Exclude<keyof T, keyof R>, V extends T[P],S extends "fieldArgument" | "objectField" >(key: P, source: S, value: S extends "fieldArgument" ? string : TT, ...extraPath: string[]) {

        const extra: {} = {[key]: {source, path: [value,...extraPath]}};

        const instance = {
            ...(this.current as object),
            ...extra
        } as R & Pick<T, P>;

        return new LinkBuilder<T, R & Pick<T, P>,TT>(instance,this.sourceField,this.targetType,this.targetField);
    }

    build = ():LinkDefinition => {

        const args = this.current as {[key:string]:{path: string[],source: "fieldArgument" | "objectField"}};
        return {
            argumentSources: Object.keys(args).map(key => ({
                name: key,
                type: args[key].source,
                path: args[key].path,
            })),
            targetType: this.targetType,
            sourceField: this.sourceField,
            targetFieldName: this.targetField,
        }
    }
}

export const sourceStep = <T extends {}, R extends {}>() => ({
    source: <F extends keyof T>(field: F) => {
        return targetStep<T, F, R>(field);
    },
});

const targetStep = <T, F extends keyof T, R>(field: F) => ({
    target: <r extends keyof R>(targetType: r, targetField: string) => {
        return new LinkBuilder<T[F],{},R[r]>({},field as string,targetType as string,targetField)
    }
})

interface TargetTypes {
    grace_User:  | "id"  | "providerId"  | "_join"  | "provider"  | "Prompt"  | "_count"  | "avatar"  | "name"  | "description"  | "createdAt"  | "History" ;
    grace_ChatMessageMinAggregateOutputType:  | "chatId"  | "_join"  | "id"  | "text"  | "parentMessageId"  | "createdAt" ;
    grace_History:  | "_join"  | "id"  | "_count"  | "updatedAt"  | "title"  | "createdAt"  | "User"  | "userId"  | "ChatMessage" ;
    grace_PromptGroupByOutputType:  | "createdAt"  | "_count"  | "_min"  | "_max"  | "updatedAt"  | "prompt"  | "title"  | "id"  | "_join"  | "_avg"  | "userId"  | "_sum" ;
    grace_HistoryCountOutputType:  | "_join"  | "ChatMessage" ;
    grace_UserMinAggregateOutputType:  | "id"  | "name"  | "avatar"  | "description"  | "provider"  | "createdAt"  | "providerId"  | "_join" ;
    grace_ChatMessageGroupByOutputType:  | "_max"  | "chatId"  | "_sum"  | "_count"  | "_avg"  | "_min"  | "createdAt"  | "_join"  | "id"  | "text"  | "parentMessageId" ;
    grace_AggregatePrompt:  | "_max"  | "_join"  | "_count"  | "_avg"  | "_sum"  | "_min" ;
    grace_AggregateUser:  | "_join"  | "_count"  | "_min"  | "_max" ;
    grace_AffectedRowsOutput:  | "count"  | "_join" ;
    grace_ChatMessageSumAggregateOutputType:  | "parentMessageId"  | "chatId"  | "_join"  | "id" ;
    grace_HistoryCountAggregateOutputType:  | "_all"  | "_join"  | "id"  | "title"  | "createdAt"  | "updatedAt"  | "userId" ;
    grace_Prompt:  | "title"  | "userId"  | "createdAt"  | "updatedAt"  | "User"  | "_join"  | "id"  | "prompt" ;
    grace_PromptCountAggregateOutputType:  | "_all"  | "_join"  | "id"  | "prompt"  | "title"  | "userId"  | "createdAt"  | "updatedAt" ;
    __Type:  | "description"  | "possibleTypes"  | "kind"  | "name"  | "enumValues"  | "inputFields"  | "ofType"  | "fields"  | "interfaces" ;
    __EnumValue:  | "name"  | "description"  | "isDeprecated"  | "deprecationReason" ;
    __InputValue:  | "name"  | "description"  | "type"  | "defaultValue" ;
    grace_PromptAvgAggregateOutputType:  | "id"  | "_join" ;
    grace_ChatMessageCountAggregateOutputType:  | "_all"  | "_join"  | "id"  | "text"  | "parentMessageId"  | "createdAt"  | "chatId" ;
    grace_HistoryAvgAggregateOutputType:  | "id"  | "_join" ;
    __Field:  | "name"  | "description"  | "args"  | "type"  | "isDeprecated"  | "deprecationReason" ;
    __Directive:  | "locations"  | "args"  | "onOperation"  | "onFragment"  | "onField"  | "name"  | "description" ;
    grace_ChatMessageMaxAggregateOutputType:  | "parentMessageId"  | "createdAt"  | "chatId"  | "_join"  | "id"  | "text" ;
    grace_PromptMaxAggregateOutputType:  | "prompt"  | "title"  | "userId"  | "createdAt"  | "updatedAt"  | "_join"  | "id" ;
    __Schema:  | "subscriptionType"  | "directives"  | "types"  | "queryType"  | "mutationType" ;
    grace_HistoryGroupByOutputType:  | "_min"  | "_join"  | "_avg"  | "title"  | "updatedAt"  | "_sum"  | "_max"  | "id"  | "_count"  | "createdAt"  | "userId" ;
    grace_ChatMessageAvgAggregateOutputType:  | "id"  | "parentMessageId"  | "chatId"  | "_join" ;
    grace_HistorySumAggregateOutputType:  | "id"  | "_join" ;
    grace_AggregateChatMessage:  | "_sum"  | "_min"  | "_max"  | "_join"  | "_count"  | "_avg" ;
    grace_HistoryMaxAggregateOutputType:  | "title"  | "createdAt"  | "updatedAt"  | "userId"  | "_join"  | "id" ;
    grace_PromptSumAggregateOutputType:  | "id"  | "_join" ;
    grace_UserCountAggregateOutputType:  | "_all"  | "_join"  | "id"  | "providerId"  | "name"  | "avatar"  | "createdAt"  | "description"  | "provider" ;
    grace_ChatMessage:  | "History"  | "_join"  | "id"  | "text"  | "parentMessageId"  | "createdAt"  | "chatId" ;
    grace_HistoryMinAggregateOutputType:  | "_join"  | "id"  | "title"  | "createdAt"  | "updatedAt"  | "userId" ;
    grace_PromptMinAggregateOutputType:  | "prompt"  | "title"  | "userId"  | "createdAt"  | "updatedAt"  | "_join"  | "id" ;
    grace_AggregateHistory:  | "_join"  | "_count"  | "_avg"  | "_sum"  | "_min"  | "_max" ;
    grace_UserGroupByOutputType:  | "providerId"  | "_count"  | "createdAt"  | "id"  | "description"  | "name"  | "_max"  | "_join"  | "avatar"  | "provider"  | "_min" ;
    grace_UserMaxAggregateOutputType:  | "_join"  | "id"  | "name"  | "avatar"  | "description"  | "provider"  | "createdAt"  | "providerId" ;
    grace_UserCountOutputType:  | "History"  | "Prompt"  | "_join" ;
}

interface SourceFields {
    grace_findManyChatMessage: {
            distinct: null;
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
    },
    grace_findFirstPrompt: {
            take: null;
            skip: null;
            distinct: null;
            where: null;
            orderBy: null;
            cursor: null;
    },
    grace_findUniqueChatMessage: {
            where: null;
    },
    grace_findFirstHistoryOrThrow: {
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
            distinct: null;
            where: null;
    },
    grace_findUniquePromptOrThrow: {
            where: null;
    },
    grace_groupByChatMessage: {
            where: null;
            orderBy: null;
            by: null;
            having: null;
            take: null;
            skip: null;
    },
    grace_findFirstUser: {
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
            distinct: null;
    },
    grace_findFirstHistory: {
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
            distinct: null;
    },
    grace_aggregateChatMessage: {
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
            where: null;
    },
    grace_groupByHistory: {
            take: null;
            skip: null;
            where: null;
            orderBy: null;
            by: null;
            having: null;
    },
    grace_findFirstChatMessage: {
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
            distinct: null;
    },
    grace_groupByUser: {
            where: null;
            orderBy: null;
            by: null;
            having: null;
            take: null;
            skip: null;
    },
    grace_aggregateUser: {
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
    },
    grace_findManyPrompt: {
            cursor: null;
            take: null;
            skip: null;
            distinct: null;
            where: null;
            orderBy: null;
    },
    grace_findManyHistory: {
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
            distinct: null;
    },
    grace_findFirstChatMessageOrThrow: {
            cursor: null;
            take: null;
            skip: null;
            distinct: null;
            where: null;
            orderBy: null;
    },
    grace_findFirstPromptOrThrow: {
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
            distinct: null;
            where: null;
    },
    grace_findUniqueUser: {
            where: null;
    },
    grace_findFirstUserOrThrow: {
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
            distinct: null;
    },
    grace_findUniqueHistory: {
            where: null;
    },
    grace_findUniquePrompt: {
            where: null;
    },
    grace_findManyUser: {
            skip: null;
            distinct: null;
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
    },
    grace_aggregatePrompt: {
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
    },
    grace_findUniqueHistoryOrThrow: {
            where: null;
    },
    grace_findUniqueUserOrThrow: {
            where: null;
    },
    grace_aggregateHistory: {
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
    },
    grace_findUniqueChatMessageOrThrow: {
            where: null;
    },
    grace_groupByPrompt: {
            where: null;
            orderBy: null;
            by: null;
            having: null;
            take: null;
            skip: null;
    },
}

const linkBuilder = sourceStep<SourceFields,TargetTypes>();
export default linkBuilder;