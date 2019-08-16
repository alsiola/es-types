import { AggregationRequest, MappedAggregations } from "..";
import { MetricsRequest } from "../metrics";
import { ExecutionHint } from "../execution_hint";

export interface DiversifiedSamplerRequest<
    T extends Record<string, AggregationRequest>
> {
    diversified_sampler: MetricsRequest<{
        shard_size?: number;
        max_docs_per_value?: number;
        execution_hint?: ExecutionHint;
    }>;
    aggs?: T;
}

export type DiversifiedSamplerResponse<
    T extends Record<string, AggregationRequest>
> = MappedAggregations<T> & {
    doc_count: number;
};
