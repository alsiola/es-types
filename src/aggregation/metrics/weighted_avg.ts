import { MetricsRequest } from ".";

export interface WeightedAvgAggregationRequest {
    weighted_avg: {
        value: WeightedAvgParam;
        weight: WeightedAvgParam;
        format?: any;
        value_type?: any;
    };
}

export type WeightedAvgParam = MetricsRequest<{
    missing?: number;
}>;

export interface WeightedAvgAggregationResponse {
    value: number;
}
