import { AggregationRequest, AggregationResponse } from "..";

export interface AutoDateHistogramAggregationRequest<
    T extends Record<string, AggregationRequest> | null
> {
    auto_date_histogram: {
        field: string;
        buckets: number;
        format: string;
        time_zone?: string;
        missing?: string;
    };
    aggs?: T;
}

export interface AutoDateHistogramAggregationResponse<
    T extends Record<string, AggregationRequest> | null
> {
    buckets: Array<
        {
            doc_count: number;
            key: number;
            key_as_string: string;
        } & AggregationResponse<T>
    >;
}
