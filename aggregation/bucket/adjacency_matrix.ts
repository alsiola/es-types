import { AggregationRequest, AggregationResponse } from "..";

export interface AdjacencyMatrixFilter {
    terms: Record<string, string[]>;
}

export interface AdjacencyMatrixAggregationRequest<
    T extends Record<string, AggregationRequest>
> {
    adjacency_matrix: {
        filters: Record<string, AdjacencyMatrixFilter>;
        separator?: string;
    };
    aggs?: T;
}

export interface AdjacencyMatrixAggregationResponse<
    T extends Record<string, AggregationRequest>
> {
    buckets: Array<{ doc_count: number; key: string } & AggregationResponse<T>>;
}
