import { AggregationRequest, AggregationResponse } from "..";

export interface DateHistogramAggregationRequest<
    T extends Record<string, AggregationRequest> | null
> {
    date_histogram: {
        field: string;
        interval: string;
        format?: string;
        time_zone?: string;
        missing?: string;
    };
    aggs?: T;
}

export interface KeyedDateHistogramAggregationRequest<
    T extends Record<string, AggregationRequest> | null
> extends DateHistogramAggregationRequest<T> {
    date_histogram: DateHistogramAggregationRequest<T>["date_histogram"] & {
        keyed: true;
    };
}

export interface DateHistogramAggregationResponse<
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

export interface KeyedDateHistogramAggregationResponse<
    T extends Record<string, AggregationRequest> | null
> {
    buckets: Record<
        string,
        {
            doc_count: number;
            key: number;
            key_as_string: string;
        } & AggregationResponse<T>
    >;
}
