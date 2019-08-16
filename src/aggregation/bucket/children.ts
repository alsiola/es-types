import { AggregationRequest, AggregationResponse } from "..";

export interface ChildrenAggregationRequest<
    T extends Record<string, AggregationRequest>
> {
    children: {
        type: string;
    };
    aggs?: T;
}

export type ChildrenAggregationResponse<T> = {
    doc_count: number;
} & AggregationResponse<T>;
