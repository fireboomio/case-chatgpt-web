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
    grace_ChatMessageGroupByOutputType:  | "_max"  | "parentMessageId"  | "chatId"  | "_avg"  | "_sum"  | "_count"  | "_join"  | "text"  | "_min"  | "id"  | "createdAt" ;
    grace_HistoryMaxAggregateOutputType:  | "updatedAt"  | "_join"  | "id"  | "uuid"  | "title"  | "createdAt" ;
    grace_ChatMessageMaxAggregateOutputType:  | "text"  | "parentMessageId"  | "createdAt"  | "chatId"  | "_join"  | "id" ;
    grace_PromptMinAggregateOutputType:  | "updatedAt"  | "_join"  | "id"  | "prompt"  | "title"  | "createdAt" ;
    grace_AggregatePrompt:  | "_join"  | "_count"  | "_avg"  | "_sum"  | "_min"  | "_max" ;
    grace_ChatMessageAvgAggregateOutputType:  | "id"  | "chatId"  | "_join" ;
    grace_HistoryAvgAggregateOutputType:  | "id"  | "uuid"  | "_join" ;
    __Type:  | "kind"  | "name"  | "fields"  | "interfaces"  | "possibleTypes"  | "inputFields"  | "description"  | "enumValues"  | "ofType" ;
    __Field:  | "description"  | "args"  | "type"  | "isDeprecated"  | "deprecationReason"  | "name" ;
    grace_AffectedRowsOutput:  | "_join"  | "count" ;
    __Schema:  | "directives"  | "types"  | "queryType"  | "mutationType"  | "subscriptionType" ;
    __EnumValue:  | "deprecationReason"  | "name"  | "description"  | "isDeprecated" ;
    grace_History:  | "uuid"  | "title"  | "createdAt"  | "updatedAt"  | "_join"  | "id" ;
    grace_PromptAvgAggregateOutputType:  | "id"  | "_join" ;
    grace_ChatMessage:  | "parentMessageId"  | "createdAt"  | "chatId"  | "_join"  | "id"  | "text" ;
    grace_HistoryMinAggregateOutputType:  | "createdAt"  | "updatedAt"  | "_join"  | "id"  | "uuid"  | "title" ;
    grace_PromptGroupByOutputType:  | "prompt"  | "title"  | "_sum"  | "_max"  | "id"  | "updatedAt"  | "_count"  | "_join"  | "_avg"  | "_min"  | "createdAt" ;
    grace_HistoryCountAggregateOutputType:  | "id"  | "uuid"  | "title"  | "createdAt"  | "updatedAt"  | "_all"  | "_join" ;
    grace_ChatMessageMinAggregateOutputType:  | "_join"  | "id"  | "text"  | "parentMessageId"  | "createdAt"  | "chatId" ;
    grace_PromptMaxAggregateOutputType:  | "title"  | "createdAt"  | "updatedAt"  | "_join"  | "id"  | "prompt" ;
    grace_PromptCountAggregateOutputType:  | "id"  | "prompt"  | "title"  | "createdAt"  | "updatedAt"  | "_all"  | "_join" ;
    grace_HistorySumAggregateOutputType:  | "id"  | "uuid"  | "_join" ;
    grace_Prompt:  | "_join"  | "id"  | "prompt"  | "title"  | "createdAt"  | "updatedAt" ;
    __Directive:  | "locations"  | "args"  | "onOperation"  | "onFragment"  | "onField"  | "name"  | "description" ;
    grace_ChatMessageCountAggregateOutputType:  | "_all"  | "_join"  | "id"  | "text"  | "parentMessageId"  | "createdAt"  | "chatId" ;
    grace_HistoryGroupByOutputType:  | "_sum"  | "_min"  | "uuid"  | "_count"  | "_join"  | "id"  | "createdAt"  | "updatedAt"  | "_avg"  | "_max"  | "title" ;
    grace_PromptSumAggregateOutputType:  | "id"  | "_join" ;
    grace_ChatMessageSumAggregateOutputType:  | "id"  | "chatId"  | "_join" ;
    grace_AggregateHistory:  | "_sum"  | "_min"  | "_max"  | "_join"  | "_count"  | "_avg" ;
    grace_AggregateChatMessage:  | "_max"  | "_join"  | "_count"  | "_avg"  | "_sum"  | "_min" ;
    __InputValue:  | "defaultValue"  | "name"  | "description"  | "type" ;
}

interface SourceFields {
    grace_findFirstHistoryOrThrow: {
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
    grace_findUniqueHistoryOrThrow: {
            where: null;
    },
    grace_findFirstPromptOrThrow: {
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
            distinct: null;
    },
    grace_groupByChatMessage: {
            take: null;
            skip: null;
            where: null;
            orderBy: null;
            by: null;
            having: null;
    },
    grace_findFirstHistory: {
            distinct: null;
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
    },
    grace_findManyHistory: {
            skip: null;
            distinct: null;
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
    },
    grace_findUniquePrompt: {
            where: null;
    },
    grace_findUniqueHistory: {
            where: null;
    },
    grace_findUniqueChatMessage: {
            where: null;
    },
    grace_findFirstPrompt: {
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
            distinct: null;
    },
    grace_aggregatePrompt: {
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
    },
    grace_groupByPrompt: {
            where: null;
            orderBy: null;
            by: null;
            having: null;
            take: null;
            skip: null;
    },
    grace_findFirstChatMessage: {
            skip: null;
            distinct: null;
            where: null;
            orderBy: null;
            cursor: null;
            take: null;
    },
    grace_groupByHistory: {
            by: null;
            having: null;
            take: null;
            skip: null;
            where: null;
            orderBy: null;
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
    grace_findManyPrompt: {
            orderBy: null;
            cursor: null;
            take: null;
            skip: null;
            distinct: null;
            where: null;
    },
    grace_findManyChatMessage: {
            take: null;
            skip: null;
            distinct: null;
            where: null;
            orderBy: null;
            cursor: null;
    },
    grace_findUniquePromptOrThrow: {
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
}

const linkBuilder = sourceStep<SourceFields,TargetTypes>();
export default linkBuilder;