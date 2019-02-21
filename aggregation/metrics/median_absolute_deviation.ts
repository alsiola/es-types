import { MetricsRequest } from ".";

export interface MedianAbsoluteDeviationAggregationRequest {
    median_absolute_deviation: MetricsRequest<{
        missing?: number;
        compression?: number;
    }>;
}

export interface MedianAbsoluteDeviationAggregationResponse {
    value: number;
}
