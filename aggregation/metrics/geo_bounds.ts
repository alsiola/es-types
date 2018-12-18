import { MetricsRequest } from ".";

export interface GeoBoundsAggregationRequest {
    geo_bounds: MetricsRequest<{
        wrap_longitude: boolean;
    }>;
}

export interface GeoBoundsAggregationResponse {
    bounds: {
        top_left: {
            lat: number;
            lon: number;
        };
        bottom_right: {
            lat: number;
            lon: number;
        };
    };
}
