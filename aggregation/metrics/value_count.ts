import { MetricsRequest } from ".";

export interface ValueCountAggregationRequest {
    value_count: MetricsRequest;
}

export interface ValueCountAggregationResponse {
    value: number;
}
