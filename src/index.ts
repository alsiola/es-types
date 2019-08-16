import { AggregationResponse, AggregationRequest } from "./aggregation";
import { Client, ConfigOptions } from "elasticsearch";
import { Query } from "./query";

export interface SearchParams<T extends Record<string, AggregationRequest>> {
    body: {
        query?: Query;
        aggs?: T;
    };
}

export const createClient = (clientOptions: ConfigOptions) => {
    const client = new Client(clientOptions);

    return {
        search: search(client)
    };
};

const search = (client: Client) => async <
    T extends Record<string, AggregationRequest>,
    U extends Record<string, AggregationRequest> | void = void,
    W extends any = void
>({
    transformRequest,
    transformResponse,
    query
}: {
    query: SearchParams<T>;
    transformRequest?: U extends Record<string, AggregationRequest>
        ? (a: SearchParams<T>) => SearchParams<U>
        : void;
    transformResponse?: (
        a: AggregationResponse<
            U extends Record<string, AggregationRequest> ? U : T
        >
    ) => W;
}): Promise<
    W extends void
        ? (U extends Record<string, AggregationRequest>
              ? AggregationResponse<U>
              : AggregationResponse<T>)
        : W
> => {
    const queryToRun = transformRequest
        ? (transformRequest as any)(query)
        : query;

    const response = await client.search({
        q: queryToRun
    });

    return transformResponse ? (transformResponse as any)(response) : response;
};
