import { AggregationRequest, AggregationResponse } from "..";

export interface ToDateRangeRequest {
    to: string;
}

export interface FromDateRangeRequest {
    from: string;
}

export type ToFromDateRangeRequest = ToDateRangeRequest & FromDateRangeRequest;

export type DateRangeRequest =
    | ToDateRangeRequest
    | FromDateRangeRequest
    | ToFromDateRangeRequest;

export interface DateRangeAggregationRequest<
    T extends Record<string, AggregationRequest> | null
> {
    date_range: {
        field: string;
        ranges: DateRangeRequest[];
        format?: string;
        time_zone?: string;
        missing?: string;
    };
    aggs?: T;
}

export interface KeyedDateRangeAggregationRequest<
    T extends Record<string, AggregationRequest> | null
> extends DateRangeAggregationRequest<T> {
    date_range: DateRangeAggregationRequest<T>["date_range"] & {
        keyed: true;
    };
}

export interface BaseDateRangeResponse {
    doc_count: number;
    key: number;
}

export interface ToDateRangeResponse extends BaseDateRangeResponse {
    to: number;
    to_as_string: string;
}

export interface FromDateRangeResponse extends BaseDateRangeResponse {
    from: number;
    from_as_string: string;
}

export type ToFromDateRangeResponse = BaseDateRangeResponse &
    ToDateRangeResponse &
    FromDateRangeResponse;

export type DateRangeResponse =
    | ToDateRangeResponse
    | FromDateRangeResponse
    | ToFromDateRangeResponse;

export interface DateRangeAggregationResponse<
    T extends Record<string, AggregationRequest> | null
> {
    buckets: Array<DateRangeResponse & AggregationResponse<T>>;
}

export interface KeyedDateRangeAggregationResponse<
    T extends Record<string, AggregationRequest> | null
> {
    buckets: Record<string, DateRangeResponse & AggregationResponse<T>>;
}
