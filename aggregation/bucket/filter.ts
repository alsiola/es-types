import {
    AggregationRequest,
    AggregationResponse,
    MappedAggregations
} from "..";
import { Query } from "../../query";

export interface FilterAggregationRequest<
    T extends Record<string, AggregationRequest>
> {
    filter: Query;
    aggs?: T;
}

export type FilterAggregationResponse<
    T extends Record<string, AggregationRequest>
> = MappedAggregations<T> & {
    doc_count: number;
};
