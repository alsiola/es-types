import { MetricsRequest } from ".";

export interface PercentileRanksRequestBase<T> {
    missing?: number;
    values?: number[];
    keyed: T;
    hdr?: {
        number_of_significant_value_digits: number;
    };
}

export interface PercentileRanksKeyedAggregationRequest {
    percentile_ranks: MetricsRequest<PercentileRanksRequestBase<true>>;
}

export interface PercentileRanksUnKeyedAggregationRequest {
    percentile_ranks: MetricsRequest<PercentileRanksRequestBase<false>>;
}

export interface PercentileRanksKeyedAggregationResponse {
    values: Record<string, number>;
}

export interface PercentileRanksUnKeyedAggregationResponse {
    values: Array<{ key: number; value: number }>;
}
