import {
    AverageAggregationRequest,
    AverageAggregationResponse
} from "./metrics/avg";
import {
    CardinalityAggregationRequest,
    CardinalityAggregationResponse
} from "./metrics/cardinality";
import {
    ExtendedStatsAggregationResponse,
    ExtendedStatsAggregationRequest
} from "./metrics/extended_stats";
import {
    GeoBoundsAggregationRequest,
    GeoBoundsAggregationResponse
} from "./metrics/geo_bounds";
import {
    GeoCentroidAggregationRequest,
    GeoCentroidAggregationResponse
} from "./metrics/geo_centroid";
import { MaxAggregationRequest, MaxAggregationResponse } from "./metrics/max";
import { MinAggregationRequest, MinAggregationResponse } from "./metrics/min";
import {
    PercentileRanksKeyedAggregationRequest,
    PercentileRanksKeyedAggregationResponse,
    PercentileRanksUnKeyedAggregationRequest,
    PercentileRanksUnKeyedAggregationResponse
} from "./metrics/percentile_ranks";
import {
    PercentilesKeyedAggregationRequest,
    PercentilesKeyedAggregationResponse,
    PercentilesUnKeyedAggregationRequest,
    PercentilesUnKeyedAggregationResponse
} from "./metrics/percentiles";
import {
    ScriptedMetricAggregationRequest,
    ScriptedMetricAggregationResponse
} from "./metrics/scripted_metric";
import {
    StatsAggregationRequest,
    StatsAggregationResponse
} from "./metrics/stats";
import { SumAggregationRequest, SumAggregationResponse } from "./metrics/sum";
import {
    ValueCountAggregationRequest,
    ValueCountAggregationResponse
} from "./metrics/value_count";
import {
    WeightedAvgAggregationRequest,
    WeightedAvgAggregationResponse
} from "./metrics/weighted_avg";
import {
    TermsAggregationRequest,
    TermsAggregationResponse
} from "./bucket/terms";

export type AggregationEntry<T> =
    // Metrics
    T extends AverageAggregationRequest
        ? AverageAggregationResponse
        : T extends CardinalityAggregationRequest
        ? CardinalityAggregationResponse
        : T extends ExtendedStatsAggregationRequest
        ? ExtendedStatsAggregationResponse
        : T extends GeoBoundsAggregationRequest
        ? GeoBoundsAggregationResponse
        : T extends GeoCentroidAggregationRequest
        ? GeoCentroidAggregationResponse
        : T extends MaxAggregationRequest
        ? MaxAggregationResponse
        : T extends MinAggregationRequest
        ? MinAggregationResponse
        : T extends PercentileRanksKeyedAggregationRequest
        ? PercentileRanksKeyedAggregationResponse
        : T extends PercentileRanksUnKeyedAggregationRequest
        ? PercentileRanksUnKeyedAggregationResponse
        : T extends PercentilesKeyedAggregationRequest
        ? PercentilesKeyedAggregationResponse
        : T extends PercentilesUnKeyedAggregationRequest
        ? PercentilesUnKeyedAggregationResponse
        : T extends ScriptedMetricAggregationRequest
        ? ScriptedMetricAggregationResponse<any>
        : T extends StatsAggregationRequest
        ? StatsAggregationResponse
        : T extends SumAggregationRequest
        ? SumAggregationResponse
        : T extends ValueCountAggregationRequest
        ? ValueCountAggregationResponse
        : T extends WeightedAvgAggregationRequest
        ? WeightedAvgAggregationResponse // Buckets
        : T extends TermsAggregationRequest<infer U>
        ? TermsAggregationResponse<U>
        : never;

export interface AggregationResponse<T> {
    aggregations?: { [K in keyof T]: AggregationEntry<T[K]> };
}

export type AggregationRequest =
    // Metrics
    | AverageAggregationRequest
    | CardinalityAggregationRequest
    | ExtendedStatsAggregationRequest
    | GeoBoundsAggregationRequest
    | GeoCentroidAggregationRequest
    | MaxAggregationRequest
    | MinAggregationRequest
    | PercentileRanksKeyedAggregationRequest
    | PercentileRanksUnKeyedAggregationRequest
    | PercentilesKeyedAggregationRequest
    | PercentilesUnKeyedAggregationRequest
    | ScriptedMetricAggregationRequest
    | StatsAggregationRequest
    | SumAggregationRequest
    | ValueCountAggregationRequest
    | WeightedAvgAggregationRequest
    // Buckets
    | TermsAggregationRequest<any>;
