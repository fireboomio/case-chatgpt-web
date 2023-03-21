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
    grace_PromptMinAggregateOutputType:  | "title"  | "userId"  | "createdAt"  | "updatedAt"  | "_join"  | "id"  | "prompt" ;
    grace_UserCountOutputType:  | "History"  | "Prompt"  | "_join" ;
    grace_UserGroupByOutputType:  | "provider"  | "createdAt"  | "_min"  | "_max"  | "avatar"  | "_join"  | "_count"  | "bio"  | "id"  | "name" ;
    grace_HistoryMinAggregateOutputType:  | "userId"  | "_join"  | "id"  | "title"  | "createdAt"  | "updatedAt" ;
    grace_AggregateUser:  | "_count"  | "_min"  | "_max"  | "_join" ;
    __Schema:  | "mutationType"  | "subscriptionType"  | "directives"  | "types"  | "queryType" ;
    grace_PromptMaxAggregateOutputType:  | "_join"  | "id"  | "prompt"  | "title"  | "userId"  | "createdAt"  | "updatedAt" ;
    grace_HistoryGroupByOutputType:  | "_count"  | "_avg"  | "_min"  | "updatedAt"  | "_sum"  | "id"  | "createdAt"  | "_join"  | "title"  | "userId"  | "_max" ;
    grace_HistoryCountAggregateOutputType:  | "userId"  | "_all"  | "_join"  | "id"  | "title"  | "createdAt"  | "updatedAt" ;
    grace_ChatMessageSumAggregateOutputType:  | "id"  | "chatId"  | "_join" ;
    grace_UserMaxAggregateOutputType:  | "_join"  | "id"  | "name"  | "avatar"  | "bio"  | "provider"  | "createdAt" ;
    __EnumValue:  | "description"  | "isDeprecated"  | "deprecationReason"  | "name" ;
    grace_HistoryMaxAggregateOutputType:  | "userId"  | "_join"  | "id"  | "title"  | "createdAt"  | "updatedAt" ;
    grace_HistorySumAggregateOutputType:  | "id"  | "_join" ;
    grace_PromptSumAggregateOutputType:  | "id"  | "_join" ;
    __Field:  | "type"  | "isDeprecated"  | "deprecationReason"  | "name"  | "description"  | "args" ;
    grace_HistoryCountOutputType:  | "ChatMessage"  | "_join" ;
    grace_PromptGroupByOutputType:  | "id"  | "_count"  | "_max"  | "title"  | "userId"  | "createdAt"  | "updatedAt"  | "_sum"  | "prompt"  | "_avg"  | "_min"  | "_join" ;
    grace_Prompt:  | "id"  | "prompt"  | "title"  | "userId"  | "createdAt"  | "updatedAt"  | "User"  | "_join" ;
    grace_User:  | "bio"  | "createdAt"  | "_count"  | "id"  | "_join"  | "Prompt"  | "name"  | "avatar"  | "provider"  | "History" ;
    __Type:  | "fields"  | "enumValues"  | "name"  | "inputFields"  | "interfaces"  | "possibleTypes"  | "kind"  | "ofType"  | "description" ;
    grace_ChatMessageMaxAggregateOutputType:  | "parentMessageId"  | "createdAt"  | "chatId"  | "_join"  | "id"  | "text" ;
    grace_ChatMessageAvgAggregateOutputType:  | "_join"  | "id"  | "chatId" ;
    __Directive:  | "onField"  | "name"  | "description"  | "locations"  | "args"  | "onOperation"  | "onFragment" ;
    grace_AggregatePrompt:  | "_max"  | "_join"  | "_count"  | "_avg"  | "_sum"  | "_min" ;
    grace_AggregateHistory:  | "_avg"  | "_sum"  | "_min"  | "_max"  | "_join"  | "_count" ;
    grace_UserCountAggregateOutputType:  | "bio"  | "provider"  | "createdAt"  | "_all"  | "_join"  | "id"  | "name"  | "avatar" ;
    grace_PromptCountAggregateOutputType:  | "title"  | "userId"  | "createdAt"  | "updatedAt"  | "_all"  | "_join"  | "id"  | "prompt" ;
    __InputValue:  | "name"  | "description"  | "type"  | "defaultValue" ;
    grace_ChatMessage:  | "createdAt"  | "chatId"  | "History"  | "_join"  | "id"  | "text"  | "parentMessageId" ;
    grace_UserMinAggregateOutputType:  | "bio"  | "provider"  | "createdAt"  | "_join"  | "id"  | "name"  | "avatar" ;
    grace_ChatMessageCountAggregateOutputType:  | "text"  | "parentMessageId"  | "createdAt"  | "chatId"  | "_all"  | "_join"  | "id" ;
    grace_ChatMessageGroupByOutputType:  | "id"  | "chatId"  | "_min"  | "parentMessageId"  | "_sum"  | "text"  | "createdAt"  | "_count"  | "_max"  | "_avg"  | "_join" ;
    grace_HistoryAvgAggregateOutputType:  | "_join"  | "id" ;
    grace_ChatMessageMinAggregateOutputType:  | "id"  | "text"  | "parentMessageId"  | "createdAt"  | "chatId"  | "_join" ;
    grace_AffectedRowsOutput:  | "count"  | "_join" ;
    grace_AggregateChatMessage:  | "_sum"  | "_min"  | "_max"  | "_join"  | "_count"  | "_avg" ;
    grace_History:  | "userId"  | "User"  | "createdAt"  | "updatedAt"  | "_count"  | "_join"  | "ChatMessage"  | "id"  | "title" ;
    grace_PromptAvgAggregateOutputType:  | "id"  | "_join" ;
}

interface SourceFields {
    grace_aggregateHistory: {
            skip: null;
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
    },
    grace_findUniquePromptOrThrow: {
            where: null;
    },
    grace_findUniqueChatMessageOrThrow: {
            where: null;
    },
    grace_findUniquePrompt: {
            where: null;
    },
    grace_findUniqueUser: {
            where: null;
    },
    grace_findUniqueHistoryOrThrow: {
            where: null;
    },
    grace_findFirstPrompt: {
            distinct: null;
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
    },
    grace_findFirstChatMessageOrThrow: {
            skip: null;
            distinct: null;
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
    },
    grace_findFirstUserOrThrow: {
            cursor: null;
            take: null;
            skip: null;
            distinct: null;
            where: null;
            orderBy: null;
    },
    grace_findUniqueChatMessage: {
            where: null;
    },
    grace_groupByHistory: {
            where: null;
            orderBy: null;
            by: null;
            having: null;
            take: null;
            skip: null;
    },
    grace_groupByUser: {
            where: null;
            orderBy: null;
            by: null;
            having: null;
            take: null;
            skip: null;
    },
    grace_findManyHistory: {
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
            distinct: null;
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
    grace_aggregatePrompt: {
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
    },
    grace_findFirstPromptOrThrow: {
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
            distinct: null;
    },
    grace_findManyChatMessage: {
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
            distinct: null;
    },
    grace_findFirstChatMessage: {
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
            distinct: null;
            where: null;
    },
    grace_findManyPrompt: {
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
    grace_aggregateChatMessage: {
            take: null;
            skip: null;
            where: null;
            orderBy: null;
            cursor: null;
    },
    grace_findFirstHistory: {
            skip: null;
            distinct: null;
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
    },
    grace_findFirstHistoryOrThrow: {
            take: null;
            skip: null;
            distinct: null;
            where: null;
            orderBy: null;
            cursor: null;
    },
    grace_findManyUser: {
            skip: null;
            distinct: null;
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
    },
    grace_findUniqueUserOrThrow: {
            where: null;
    },
    grace_findFirstUser: {
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
            distinct: null;
    },
    grace_aggregateUser: {
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
    },
    grace_groupByChatMessage: {
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