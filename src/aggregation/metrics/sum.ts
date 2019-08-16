import { MetricsRequest } from ".";

export interface SumAggregationRequest {
    sum: MetricsRequest<{
        missing?: number;
    }>;
}

export interface SumAggregationResponse {
    value: number;
}
