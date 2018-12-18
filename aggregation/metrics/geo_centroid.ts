import { MetricsRequest } from ".";

export interface GeoCentroidAggregationRequest {
    geo_bounds: MetricsRequest;
}

export interface GeoCentroidAggregationResponse {
    centroid: {
        location: {
            lat: number;
            lon: number;
        };
        count: number;
    };
}
