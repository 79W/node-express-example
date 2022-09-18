module.exports = {
  port: 5279,
  mysql_config: {
    dialect: 'mysql',
    host: '49.232.144.156',
    port: 3306,
    username: 'masscode_test',
    password: 'masscodeTestMysql_niyongyuanyecaibudao',
    database: 'masscode_test',
    timezone: '+08:00',
  },
  // Mongodb 数据库配置
  mongodb_config: {
    type: 'mongodb',
    host: '49.232.144.156',
    port: 27017,
    username: 'masscode',
    password: 'masscodeMongoAdmin',
    database: 'masscode_test',
    uri: 'mongodb://masscode:masscodeMongoAdmin@49.232.144.156:27017/masscode_test',
  },
  redis_cache_config: {
    type: 'redis',
    host: '49.232.144.156',
    port: 6379,
    auth_pass: 'redisAdmin123.qytxbt',
    isGlobal: true,
    db: 3,
  },
  redis_queue_config: {
    type: 'redis',
    host: '49.232.144.156',
    port: 6379,
    password: 'redisAdmin123.qytxbt',
    db: 4,
  },
};
