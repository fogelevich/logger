export interface Logger {
  debug(msg: string): void;
  info(msg: string): void;
  warn(msg: string): void;
  error(msg: string): void;
}

const LOG_LEVELS = {
  VERBOSE: 1,
  DEBUG: 2,
  INFO: 3,
  WARN: 4,
  ERROR: 5
};

export class ConsoleLogger implements Logger {
  name: string;
  level: string;

  constructor(name: string, level = 'INFO') {
    this.name = name;
    this.level = level;
  }

  static LOG_LEVEL = null;

  _padding(n: number): string {
    return n < 10 ? '0' + n : '' + n;
  }

  _ts(): string {
    const dt = new Date();
    return (
      [this._padding(dt.getMinutes()), this._padding(dt.getSeconds())].join(
        ':'
      ) +
      '.' +
      dt.getMilliseconds()
    );
  }

  _log(type: string, ...msg: any[]): void {
    let logger_level_name: string = this.level;
    if (ConsoleLogger.LOG_LEVEL) {
      // @ts-ignore
      logger_level_name = ConsoleLogger.LOG_LEVEL;
    }
    if (typeof (<any>window) !== 'undefined' && (<any>window).LOG_LEVEL) {
      logger_level_name = (<any>window).LOG_LEVEL;
    }
    const logger_level = LOG_LEVELS[logger_level_name];
    const type_level = LOG_LEVELS[type];
    if (!(type_level >= logger_level)) {
      return;
    }

    let log = console.log.bind(console);
    if (type === 'ERROR' && console.error) {
      log = console.error.bind(console);
    }
    if (type === 'WARN' && console.warn) {
      log = console.warn.bind(console);
    }

    const prefix = `[${type}] ${this._ts()} ${this.name}`;

    if (msg.length === 1 && typeof msg[0] === 'string') {
      log(`${prefix} - ${msg[0]}`);
    } else if (msg.length === 1) {
      log(prefix, msg[0]);
    } else if (typeof msg[0] === 'string') {
      let obj = msg.slice(1);
      if (obj.length === 1) {
        obj = obj[0];
      }
      log(`${prefix} - ${msg[0]}`, obj);
    } else {
      log(prefix, msg);
    }
  }

  log(...msg: any[]) {
    this._log('INFO', ...msg);
  }

  info(...msg: any[]) {
    this._log('INFO', ...msg);
  }

  warn(...msg: any[]) {
    this._log('WARN', ...msg);
  }

  error(...msg: any[]) {
    this._log('ERROR', ...msg);
  }

  debug(...msg: any[]) {
    this._log('DEBUG', ...msg);
  }

  verbose(...msg: any[]) {
    this._log('VERBOSE', ...msg);
  }
}