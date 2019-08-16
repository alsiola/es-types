import { MetricsRequest } from ".";

export interface ExtendedStatsAggregationRequest {
    extended_stats: MetricsRequest<{
        missing?: number;
        sigma?: number;
    }>;
}

export interface ExtendedStatsAggregationResponse {
    count: number;
    min: number;
    max: number;
    avg: number;
    sum: number;
    sum_of_squares: number;
    variance: number;
    std_deviation: number;
    std_deviation_bounds: {
        upper: number;
        lower: number;
    };
}
