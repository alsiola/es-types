import { MetricsRequest } from ".";

export interface MaxAggregationRequest {
    max: MetricsRequest<{
        missing?: number;
    }>;
}

export interface MaxAggregationResponse {
    value: number;
}
