import { MetricsRequest } from ".";

export interface MinAggregationRequest {
    min: MetricsRequest<{
        missing?: number;
    }>;
}

export interface MinAggregationResponse {
    value: number;
}
