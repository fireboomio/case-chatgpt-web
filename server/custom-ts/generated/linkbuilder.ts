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
    grace_PromptMinAggregateOutputType:  | "id"  | "prompt"  | "title"  | "createdAt"  | "updatedAt"  | "_join" ;
    grace_PromptCountAggregateOutputType:  | "createdAt"  | "updatedAt"  | "_all"  | "_join"  | "id"  | "prompt"  | "title" ;
    grace_PromptSumAggregateOutputType:  | "id"  | "_join" ;
    __InputValue:  | "name"  | "description"  | "type"  | "defaultValue" ;
    grace_History:  | "_join"  | "id"  | "title"  | "createdAt"  | "updatedAt"  | "ChatMessage"  | "_count" ;
    grace_Prompt:  | "prompt"  | "title"  | "createdAt"  | "updatedAt"  | "_join"  | "id" ;
    grace_HistoryAvgAggregateOutputType:  | "id"  | "_join" ;
    grace_ChatMessageAvgAggregateOutputType:  | "id"  | "chatId"  | "_join" ;
    grace_AggregateChatMessage:  | "_count"  | "_avg"  | "_sum"  | "_min"  | "_max"  | "_join" ;
    grace_ChatMessage:  | "text"  | "parentMessageId"  | "createdAt"  | "chatId"  | "History"  | "_join"  | "id" ;
    __Type:  | "description"  | "enumValues"  | "name"  | "possibleTypes"  | "ofType"  | "kind"  | "inputFields"  | "fields"  | "interfaces" ;
    grace_PromptAvgAggregateOutputType:  | "id"  | "_join" ;
    grace_HistorySumAggregateOutputType:  | "id"  | "_join" ;
    grace_HistoryMinAggregateOutputType:  | "title"  | "createdAt"  | "updatedAt"  | "_join"  | "id" ;
    grace_ChatMessageSumAggregateOutputType:  | "id"  | "chatId"  | "_join" ;
    grace_ChatMessageMinAggregateOutputType:  | "id"  | "text"  | "parentMessageId"  | "createdAt"  | "chatId"  | "_join" ;
    grace_HistoryGroupByOutputType:  | "title"  | "_join"  | "id"  | "_count"  | "_min"  | "createdAt"  | "updatedAt"  | "_avg"  | "_sum"  | "_max" ;
    grace_PromptGroupByOutputType:  | "createdAt"  | "_count"  | "_join"  | "id"  | "_sum"  | "_min"  | "prompt"  | "_max"  | "title"  | "updatedAt"  | "_avg" ;
    grace_AggregatePrompt:  | "_count"  | "_avg"  | "_sum"  | "_min"  | "_max"  | "_join" ;
    grace_ChatMessageGroupByOutputType:  | "chatId"  | "_sum"  | "_join"  | "_min"  | "text"  | "parentMessageId"  | "_count"  | "_avg"  | "id"  | "_max"  | "createdAt" ;
    __EnumValue:  | "description"  | "isDeprecated"  | "deprecationReason"  | "name" ;
    __Directive:  | "locations"  | "args"  | "onOperation"  | "onFragment"  | "onField"  | "name"  | "description" ;
    grace_HistoryCountOutputType:  | "_join"  | "ChatMessage" ;
    grace_AffectedRowsOutput:  | "count"  | "_join" ;
    grace_ChatMessageCountAggregateOutputType:  | "_join"  | "id"  | "text"  | "parentMessageId"  | "createdAt"  | "chatId"  | "_all" ;
    grace_AggregateHistory:  | "_count"  | "_avg"  | "_sum"  | "_min"  | "_max"  | "_join" ;
    grace_PromptMaxAggregateOutputType:  | "createdAt"  | "updatedAt"  | "_join"  | "id"  | "prompt"  | "title" ;
    __Schema:  | "subscriptionType"  | "directives"  | "types"  | "queryType"  | "mutationType" ;
    grace_ChatMessageMaxAggregateOutputType:  | "_join"  | "id"  | "text"  | "parentMessageId"  | "createdAt"  | "chatId" ;
    grace_HistoryCountAggregateOutputType:  | "createdAt"  | "updatedAt"  | "_all"  | "_join"  | "id"  | "title" ;
    grace_HistoryMaxAggregateOutputType:  | "updatedAt"  | "_join"  | "id"  | "title"  | "createdAt" ;
    __Field:  | "name"  | "description"  | "args"  | "type"  | "isDeprecated"  | "deprecationReason" ;
}

interface SourceFields {
    grace_aggregateChatMessage: {
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
    },
    grace_findFirstHistory: {
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
            distinct: null;
    },
    grace_findFirstHistoryOrThrow: {
            distinct: null;
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
    },
    grace_findFirstPrompt: {
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
            distinct: null;
    },
    grace_findManyChatMessage: {
            distinct: null;
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
    },
    grace_aggregateHistory: {
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
    },
    grace_findUniqueChatMessage: {
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
    grace_findFirstChatMessageOrThrow: {
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
            distinct: null;
    },
    grace_findUniqueHistoryOrThrow: {
            where: null;
    },
    grace_groupByPrompt: {
            take: null;
            skip: null;
            where: null;
            orderBy: null;
            by: null;
            having: null;
    },
    grace_findUniquePrompt: {
            where: null;
    },
    grace_findUniqueChatMessageOrThrow: {
            where: null;
    },
    grace_aggregatePrompt: {
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
    },
    grace_findUniquePromptOrThrow: {
            where: null;
    },
    grace_findManyHistory: {
            distinct: null;
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
    },
    grace_findFirstPromptOrThrow: {
            distinct: null;
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
    },
    grace_findFirstChatMessage: {
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
            distinct: null;
            where: null;
    },
    grace_groupByChatMessage: {
            orderBy: null;
            by: null;
            having: null;
            take: null;
            skip: null;
            where: null;
    },
    grace_findUniqueHistory: {
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
}

const linkBuilder = sourceStep<SourceFields,TargetTypes>();
export default linkBuilder;