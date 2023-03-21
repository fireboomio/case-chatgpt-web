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
    grace_PromptSumAggregateOutputType:  | "_join"  | "id" ;
    grace_HistoryCountAggregateOutputType:  | "_join"  | "id"  | "title"  | "createdAt"  | "updatedAt"  | "_all" ;
    grace_ChatMessageAvgAggregateOutputType:  | "_join"  | "id"  | "chatId" ;
    __InputValue:  | "type"  | "defaultValue"  | "name"  | "description" ;
    grace_HistoryCountOutputType:  | "ChatMessage"  | "_join" ;
    grace_PromptMaxAggregateOutputType:  | "title"  | "createdAt"  | "updatedAt"  | "_join"  | "id"  | "prompt" ;
    __Directive:  | "description"  | "locations"  | "args"  | "onOperation"  | "onFragment"  | "onField"  | "name" ;
    grace_ChatMessageMinAggregateOutputType:  | "chatId"  | "_join"  | "id"  | "text"  | "parentMessageId"  | "createdAt" ;
    grace_HistoryGroupByOutputType:  | "_count"  | "_max"  | "createdAt"  | "_sum"  | "_join"  | "updatedAt"  | "id"  | "title"  | "_min"  | "_avg" ;
    grace_HistorySumAggregateOutputType:  | "id"  | "_join" ;
    grace_ChatMessageMaxAggregateOutputType:  | "createdAt"  | "chatId"  | "_join"  | "id"  | "text"  | "parentMessageId" ;
    grace_ChatMessage:  | "chatId"  | "History"  | "_join"  | "id"  | "text"  | "parentMessageId"  | "createdAt" ;
    grace_PromptAvgAggregateOutputType:  | "_join"  | "id" ;
    grace_History:  | "id"  | "title"  | "createdAt"  | "updatedAt"  | "ChatMessage"  | "_count"  | "_join" ;
    grace_AggregatePrompt:  | "_min"  | "_max"  | "_join"  | "_count"  | "_avg"  | "_sum" ;
    grace_HistoryMinAggregateOutputType:  | "id"  | "title"  | "createdAt"  | "updatedAt"  | "_join" ;
    grace_PromptMinAggregateOutputType:  | "_join"  | "id"  | "prompt"  | "title"  | "createdAt"  | "updatedAt" ;
    __EnumValue:  | "deprecationReason"  | "name"  | "description"  | "isDeprecated" ;
    __Field:  | "type"  | "isDeprecated"  | "deprecationReason"  | "name"  | "description"  | "args" ;
    grace_ChatMessageCountAggregateOutputType:  | "text"  | "parentMessageId"  | "createdAt"  | "chatId"  | "_all"  | "_join"  | "id" ;
    grace_Prompt:  | "prompt"  | "title"  | "createdAt"  | "updatedAt"  | "_join"  | "id" ;
    grace_AggregateHistory:  | "_count"  | "_avg"  | "_sum"  | "_min"  | "_max"  | "_join" ;
    grace_AggregateChatMessage:  | "_max"  | "_join"  | "_count"  | "_avg"  | "_sum"  | "_min" ;
    grace_AffectedRowsOutput:  | "_join"  | "count" ;
    grace_HistoryAvgAggregateOutputType:  | "_join"  | "id" ;
    grace_ChatMessageGroupByOutputType:  | "id"  | "text"  | "_max"  | "parentMessageId"  | "createdAt"  | "chatId"  | "_count"  | "_avg"  | "_sum"  | "_min"  | "_join" ;
    grace_PromptGroupByOutputType:  | "updatedAt"  | "createdAt"  | "prompt"  | "_join"  | "_max"  | "id"  | "_min"  | "_count"  | "title"  | "_avg"  | "_sum" ;
    __Type:  | "inputFields"  | "ofType"  | "kind"  | "possibleTypes"  | "enumValues"  | "description"  | "interfaces"  | "fields"  | "name" ;
    grace_HistoryMaxAggregateOutputType:  | "id"  | "title"  | "createdAt"  | "updatedAt"  | "_join" ;
    __Schema:  | "subscriptionType"  | "directives"  | "types"  | "queryType"  | "mutationType" ;
    grace_PromptCountAggregateOutputType:  | "title"  | "createdAt"  | "updatedAt"  | "_all"  | "_join"  | "id"  | "prompt" ;
    grace_ChatMessageSumAggregateOutputType:  | "id"  | "chatId"  | "_join" ;
}

interface SourceFields {
    grace_findManyPrompt: {
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
    grace_findUniquePrompt: {
            where: null;
    },
    grace_findUniqueChatMessageOrThrow: {
            where: null;
    },
    grace_aggregateHistory: {
            skip: null;
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
    },
    grace_findManyChatMessage: {
            skip: null;
            distinct: null;
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
    },
    grace_findManyHistory: {
            cursor: null;
            take: null;
            skip: null;
            distinct: null;
            where: null;
            orderBy: null;
    },
    grace_findFirstPrompt: {
            distinct: null;
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
    },
    grace_findUniqueHistory: {
            where: null;
    },
    grace_findUniqueHistoryOrThrow: {
            where: null;
    },
    grace_findFirstChatMessageOrThrow: {
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
            distinct: null;
    },
    grace_aggregatePrompt: {
            skip: null;
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
    },
    grace_groupByChatMessage: {
            having: null;
            take: null;
            skip: null;
            where: null;
            orderBy: null;
            by: null;
    },
    grace_groupByPrompt: {
            where: null;
            orderBy: null;
            by: null;
            having: null;
            take: null;
            skip: null;
    },
    grace_findUniquePromptOrThrow: {
            where: null;
    },
    grace_findFirstChatMessage: {
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
            distinct: null;
    },
    grace_aggregateChatMessage: {
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
    },
    grace_findFirstHistory: {
            distinct: null;
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
    },
    grace_findFirstHistoryOrThrow: {
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
            distinct: null;
            where: null;
    },
    grace_groupByHistory: {
            orderBy: null;
            by: null;
            having: null;
            take: null;
            skip: null;
            where: null;
    },
    grace_findFirstPromptOrThrow: {
            skip: null;
            distinct: null;
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
    },
}

const linkBuilder = sourceStep<SourceFields,TargetTypes>();
export default linkBuilder;