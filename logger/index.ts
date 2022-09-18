import winston, { LogCallback } from './winston';

type LogValue = string | Array<any> | { [key: string | number]: any };

const changeAny = (value: LogValue) => {
  if (typeof value === 'string') {
    return value;
  }
  return JSON.stringify(value);
};

export default {
  info(value: LogValue, callback?: LogCallback) {
    const logMessage = changeAny(value);
    winston.info(logMessage, callback);
  },
  error(value: LogValue, callback?: LogCallback) {
    const logMessage = changeAny(value);
    winston.error(logMessage, callback);
  },
  warn(value: LogValue, callback?: LogCallback) {
    const logMessage = changeAny(value);
    winston.warn(logMessage, callback);
  },
  debug(value: LogValue, callback?: LogCallback) {
    const logMessage = changeAny(value);
    winston.debug(logMessage, callback);
  },
  http(value: LogValue, callback?: LogCallback) {
    const logMessage = changeAny(value);
    winston.http(logMessage, callback);
  },
};
