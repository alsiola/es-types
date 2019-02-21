import { AggregationResponse, AggregationRequest } from "./aggregation";

interface Query<T extends Record<string, AggregationRequest>> {
    body: {
        aggs?: T;
    };
}

export const search = <T extends Record<string, AggregationRequest>>(
    query: Query<T>
): Promise<AggregationResponse<T>> => {
    return {} as any;
};

search({
    body: {
        aggs: {
            test: {
                adjacency_matrix: {
                    filters: {
                        grpA: {
                            terms: { account: ["a"] }
                        }
                    }
                }
            }
        }
    }
}).then(results => {
    results.aggregations.test.buckets.map(bucket => bucket);
});
