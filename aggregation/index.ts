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
import {
    MedianAbsoluteDeviationAggregationRequest,
    MedianAbsoluteDeviationAggregationResponse
} from "./metrics/median_absolute_deviation";
import {
    AdjacencyMatrixAggregationRequest,
    AdjacencyMatrixAggregationResponse
} from "./bucket/adjacency_matrix";
import {
    AutoDateHistogramAggregationRequest,
    AutoDateHistogramAggregationResponse
} from "./bucket/auto_date_histogram";
import {
    ChildrenAggregationRequest,
    ChildrenAggregationResponse
} from "./bucket/children";
import {
    CompositeAggregationRequest,
    CompositeAggregationResponse
} from "./bucket/composite";
import {
    DateHistogramAggregationRequest,
    KeyedDateHistogramAggregationRequest,
    KeyedDateHistogramAggregationResponse,
    DateHistogramAggregationResponse
} from "./bucket/date_histogram";
import { NestedAggregationRequest, NestedAggregationResponse } from "./nested";
import {
    DateRangeAggregationRequest,
    DateRangeAggregationResponse,
    KeyedDateRangeAggregationRequest,
    KeyedDateRangeAggregationResponse
} from "./bucket/date_range";
import {
    DiversifiedSamplerRequest,
    DiversifiedSamplerResponse
} from "./bucket/diversified_sampler";

export type AggregationEntry<T> =
    // Nested
    T extends NestedAggregationRequest<infer U>
        ? NestedAggregationResponse<U> // Metrics
        : T extends AverageAggregationRequest
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
        : T extends MedianAbsoluteDeviationAggregationRequest
        ? MedianAbsoluteDeviationAggregationResponse
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
        : T extends AdjacencyMatrixAggregationRequest<infer U>
        ? AdjacencyMatrixAggregationResponse<U>
        : T extends AutoDateHistogramAggregationRequest<infer U>
        ? AutoDateHistogramAggregationResponse<U>
        : T extends ChildrenAggregationRequest<infer U>
        ? ChildrenAggregationResponse<U>
        : T extends CompositeAggregationRequest<infer U, infer V, infer W>
        ? CompositeAggregationResponse<U, V, W>
        : T extends KeyedDateHistogramAggregationRequest<infer U>
        ? KeyedDateHistogramAggregationResponse<U>
        : T extends DateHistogramAggregationRequest<infer U>
        ? DateHistogramAggregationResponse<U>
        : T extends KeyedDateRangeAggregationRequest<infer U>
        ? KeyedDateRangeAggregationResponse<U>
        : T extends DateRangeAggregationRequest<infer U>
        ? DateRangeAggregationResponse<U>
        : T extends DiversifiedSamplerRequest<infer U>
        ? DiversifiedSamplerResponse<U>
        : never;

export type AggregationResponse<T> = T extends Record<
    string,
    AggregationRequest
>
    ? {
          aggregations?: { [K in keyof T]: AggregationEntry<T[K]> };
      }
    : {};

export type AggregationRequest =
    // Nested
    | NestedAggregationRequest<any>
    // Metrics
    | AverageAggregationRequest
    | CardinalityAggregationRequest
    | ExtendedStatsAggregationRequest
    | GeoBoundsAggregationRequest
    | GeoCentroidAggregationRequest
    | MaxAggregationRequest
    | MedianAbsoluteDeviationAggregationRequest
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
    | TermsAggregationRequest<any>
    | AdjacencyMatrixAggregationRequest<any>
    | AutoDateHistogramAggregationRequest<any>
    | ChildrenAggregationRequest<any>
    | CompositeAggregationRequest<any, any, any>
    | DateHistogramAggregationRequest<any>
    | DateRangeAggregationRequest<any>
    | DiversifiedSamplerRequest<any>;
