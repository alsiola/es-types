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
                date_range: {
                    field: "",
                    ranges: [{ to: "" }],
                    keyed: true as true
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
    results.aggregations.test.buckets.ccc.aggregations.ddd.value;
});
