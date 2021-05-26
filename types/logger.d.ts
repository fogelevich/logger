export interface Logger {
    debug(msg: string): void;
    info(msg: string): void;
    warn(msg: string): void;
    error(msg: string): void;
    trace(msg: string): void;
}
export declare class ConsoleLogger implements Logger {
    name: string;
    level: string;
    constructor(name: string, level?: string);
    static LOG_LEVEL: string | null;
    _log(type: string, ...msg: any[]): void;
    log(...msg: any[]): void;
    info(...msg: any[]): void;
    warn(...msg: any[]): void;
    error(...msg: any[]): void;
    debug(...msg: any[]): void;
    verbose(...msg: any[]): void;
    trace(...msg: any[]): void;
}
