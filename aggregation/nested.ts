interface NestedAggregationRequest<T> {
    nested: {
        field: string;
        aggs: { [name: string]: T };
    };
}

// type NestedAggregationResponse<T> = AggregationResponse<T>;
