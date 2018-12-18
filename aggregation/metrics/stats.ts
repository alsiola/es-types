import { MetricsRequest } from ".";

export interface StatsAggregationRequest {
    stats: MetricsRequest<{
        missing?: number;
    }>;
}

export interface StatsAggregationResponse {
    count: number;
    min: number;
    max: number;
    avg: number;
    sum: number;
}
