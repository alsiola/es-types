import { AggregationRequest, AggregationResponse } from "..";
import { MetricsRequest } from "../metrics";

export interface CompositeSourceTerms {
    terms: {
        order?: string;
        missing_bucket?: boolean;
    } & (
        | {
              field: string;
          }
        | {
              source: string;
              lang: string;
          });
}

export interface CompositeSourceHistogram {
    histogram: {
        interval: number;
        order?: string;
        missing_bucket?: boolean;
    } & (
        | {
              field: string;
          }
        | {
              source: string;
              lang: string;
          });
}

export interface CompositeSourceDateHistogram {
    date_histogram: {
        interval: string;
        order?: string;
        missing_bucket?: boolean;
        format?: string;
        time_zone?: string;
    } & (
        | {
              field: string;
          }
        | {
              source: string;
              lang: string;
          });
}

export type CompositeSource =
    | CompositeSourceTerms
    | CompositeSourceHistogram
    | CompositeSourceDateHistogram;

export interface CompositeAggregationRequest<
    T extends Record<string, AggregationRequest>,
    U extends Record<string, string | number>,
    V extends Record<string, CompositeSource>
> {
    composite: {
        sources: V[];
        size?: number;
        after?: U;
    };
    aggs?: T;
}

export interface CompositeAggregationResponse<
    T,
    U extends Record<string, string | number>,
    V extends Record<string, CompositeSource>
> {
    after_key: U;
    buckets: Array<
        { doc_count: number } & {
            key: {
                [K in keyof V]-?: Exclude<
                    V[K] extends undefined
                        ? never
                        : V[K] extends CompositeSourceHistogram
                        ? number
                        : V[K] extends CompositeSourceDateHistogram
                        ? number
                        : string,
                    never
                >
            };
        }
    > &
        AggregationResponse<T>;
}
