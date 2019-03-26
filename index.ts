import { AggregationResponse, AggregationRequest } from "./aggregation";
import { ExecutionHint } from "./aggregation/execution_hint";
import { Query } from "./query";

interface SearchParams<T extends Record<string, AggregationRequest>> {
    body: {
        query?: Query;
        aggs?: T;
    };
}

export const search = <T extends Record<string, AggregationRequest>>(
    query: SearchParams<T>
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
    results.aggregations.test.ddd.value;
});
