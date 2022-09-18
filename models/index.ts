import { Express } from 'express';
import { Sequelize } from 'sequelize';
import Config from '../config';

const sequelizeExample = new Sequelize({
  ...Config.get('mysql_config'),
  logging: (sql: string, timing?: number) => {
    console.log(sql);
  },
});

const initMysql = async (app: Express) => {
  try {
    await sequelizeExample.authenticate();
    console.log('sequelize mysql 链接成功。');
  } catch (error) {
    console.error('sequelize mysql 链接错误:', error);
  }

  return sequelizeExample;
};

export { initMysql, sequelizeExample };
