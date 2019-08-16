import { MetricsRequest } from ".";

export interface AverageAggregationRequest {
    avg: MetricsRequest<{
        missing?: number;
    }>;
}

export interface AverageAggregationResponse {
    value: number;
}
