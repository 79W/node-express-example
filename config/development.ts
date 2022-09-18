module.exports = {
  port: 5279,
  mysql_config: {
    dialect: '',
    host: '',
    port: 3306,
    username: '',
    password: '',
    database: '',
    timezone: '+08:00',
  },
  // Mongodb 数据库配置
  mongodb_config: {
    type: 'mongodb',
    host: '',
    port: 27017,
    username: '',
    password: '',
    database: '',
    uri: '',
  },
  redis_cache_config: {
    type: 'redis',
    host: '',
    port: 6379,
    auth_pass: '',
    isGlobal: true,
    db: 3,
  },
  redis_queue_config: {
    type: 'redis',
    host: '',
    port: 6379,
    password: '',
    db: 4,
  },
};
