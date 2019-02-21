export interface AdjacencyMatrixFilter {
    terms: Record<string, string[]>;
}

export interface AdjacencyMatrixAggregationRequest {
    adjacency_matrix: {
        filters: Record<string, AdjacencyMatrixFilter>;
        separator?: string;
    };
}

export interface AdjacencyMatrixAggregationResponse {
    buckets: Array<{ doc_count: number; key: string }>;
}
