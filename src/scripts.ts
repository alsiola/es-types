export enum ScriptLanguage {
    painless = "painless"
}

export interface InlineScript {
    lang: ScriptLanguage;
    source: string;
    params?: Record<string, any>;
}

export interface StoredScript {
    id: string;
    params?: Record<string, any>;
}

export type ScriptParam = InlineScript | StoredScript | string;
