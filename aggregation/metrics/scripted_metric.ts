import { ScriptParam } from "../../scripts";

export interface ScriptedMetricAggregationRequest {
    scripted_metric: {
        init_script: ScriptParam;
        map_script: ScriptParam;
        combine_script: ScriptParam;
        reduce_script: ScriptParam;
    };
}

export interface ScriptedMetricAggregationResponse<T> {
    value: T;
}
