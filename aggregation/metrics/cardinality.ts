import { MetricsRequest } from ".";

export interface CardinalityAggregationRequest {
    cardinality: MetricsRequest<{
        missing?: number;
        precision_threshold?: number;
    }>;
}

export interface CardinalityAggregationResponse {
    value: number;
}
