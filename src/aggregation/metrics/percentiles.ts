import { MetricsRequest } from ".";

export interface PercentilesRequestBase<T> {
    missing?: number;
    percents?: number[];
    keyed: T;
    tdigest?: {
        compression: number;
    };
    hdr?: {
        number_of_significant_value_digits: number;
    };
}

export interface PercentilesKeyedAggregationRequest {
    percentiles: MetricsRequest<PercentilesRequestBase<true>>;
}

export interface PercentilesUnKeyedAggregationRequest {
    percentiles: MetricsRequest<PercentilesRequestBase<false>>;
}

export interface PercentilesKeyedAggregationResponse {
    values: Record<string, number>;
}

export interface PercentilesUnKeyedAggregationResponse {
    values: Array<{ key: number; value: number }>;
}
