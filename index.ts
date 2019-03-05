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
                composite: {
                    sources: [
                        { testbbb: { terms: { field: "ddd" } } },
                        {
                            testaaa: {
                                histogram: { field: "ddd", interval: 3 }
                            }
                        }
                    ]
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
    results.aggregations.test.buckets.map(
        bucket => bucket.aggregations.ddd.value
    );
});
