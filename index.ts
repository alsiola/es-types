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
                nested: {
                    path: ""
                },
                aggs: {
                    ddd: {
                        avg: {
                            field: ""
                        }
                    }
                }
            }
        }
    }
}).then(results => {
    results.aggregations.test.aggregations.ddd.value;
});
