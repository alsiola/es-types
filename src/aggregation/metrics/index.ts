import { ScriptParam } from "../../scripts";

export type FieldRequest<T> = T & {
    field: string;
};

export type ScriptRequest<T> = T & {
    script: ScriptParam;
};

export type MetricsRequest<T = {}> = FieldRequest<T> | ScriptRequest<T>;
