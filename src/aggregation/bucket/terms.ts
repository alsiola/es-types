import { AggregationRequest, AggregationResponse } from "..";

export interface TermsAggregationRequest<
    T extends Record<string, AggregationRequest>
> {
    terms: {
        field: string;
    };
    aggs?: T;
}

export interface TermsAggregationResponse<T> {
    buckets: Array<{ doc_count: number } & AggregationResponse<T>>;
}
