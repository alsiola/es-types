import {
    AggregationRequest,
    AggregationResponse,
    MappedAggregations
} from "..";
import { Query } from "../../query";

export interface FiltersAggregationRequest<
    T extends Record<string, AggregationRequest>,
    U extends Record<string, Query> | Query[],
    V extends boolean,
    W extends string = "other_bucket_key"
> {
    filters: {
        filters: U;
        other_bucket?: V;
        other_bucket_key?: W;
    };
    aggs?: T;
}

export type FiltersResponseBucket<
    T extends Record<string, AggregationRequest>
> = MappedAggregations<T> & { doc_count: number };

export type FiltersAggregationResponse<
    T extends Record<string, AggregationRequest>,
    U extends Record<string, Query> | Query[],
    V extends boolean,
    W extends string = "other_bucket_key"
> = U extends Record<string, Query>
    ? ({ [K in keyof U]: FiltersResponseBucket<T> }) &
          (V extends true ? Record<W, FiltersResponseBucket<T>> : {})
    : Array<FiltersResponseBucket<T>>;
