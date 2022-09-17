export type Config = {
  port: number;
  get: (key: string) => any;
};

export default (function () {
  const version = (process.env.NODE_ENV || 'development').toLowerCase();
  let config: Config;

  try {
    config = require(`./${version}`);
  } catch (err) {
    process.exit(-1);
  }

  config.get = (key: string): any => {
    return config[key];
  };

  return config;
})();
