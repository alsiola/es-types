export enum FieldType {
    string = "string",
    text = "text",
    keyword = "keyword",
    long = "long",
    integer = "integer",
    short = "short",
    byte = "byte",
    double = "double",
    float = "float",
    half_float = "half_float",
    scaled_float = "scaled_float",
    date = "date",
    boolean = "boolean",
    integer_range = "integer_range",
    float_range = "float_range",
    long_range = "long_range",
    double_range = "double_range",
    date_range = "date_range",
    object = "object",
    nested = "nested",
    geo_point = "geo_point",
    geo_shape = "geo_shape",
    ip = "ip",
    completion = "completion",
    token_count = "token_count",
    murmur3 = "murmur3",
    attachment = "attachment"
}

export interface DynamicTemplate {
    [key: string]: {
        match_mapping_type?: "*" | FieldType;
        path_match?: string;
        mapping: {
            type: FieldType;
            analyzer?: any;
            format?: string;
        };
    };
}

export type Dynamic = "strict" | true | false;

export interface DynamicProperty {
    dynamic: true;
    properties: {};
}

export interface StaticProperty<T> {
    type?: FieldType;
    format?: string;
    dynamic?: Dynamic;
    properties?: Properties<T>;
}

export type Property<T> = DynamicProperty | StaticProperty<T>;

export type Properties<T> = {
    [K in keyof T]: T[K] extends Array<infer U> ? Property<U> : Property<T[K]>
};

export interface Mapping<T> {
    dynamic_templates?: DynamicTemplate[];
    dynamic?: Dynamic;
    properties: Properties<T>;
}
