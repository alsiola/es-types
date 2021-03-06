import { AggregationRequest, MappedAggregations } from "..";

export interface NestedAggregationRequest<
    T extends Record<string, AggregationRequest>
> {
    nested: {
        path: string;
    };
    aggs?: T;
}

export type NestedAggregationResponse<
    T extends Record<string, AggregationRequest>
> = MappedAggregations<T>;
