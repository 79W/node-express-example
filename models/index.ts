import { DataSource } from 'typeorm';
import { Express } from 'express';
import config from '../config';
import { User } from './entitys/user.entity';

const mysqlConnection = new DataSource({
  ...config.get('mysql_config'),
  entities: [User],
});

const initMysql = (app: Express) => {
  mysqlConnection
    .initialize()
    .then(() => {
      console.log('Mysql连接成功：mysqlConnection');
    })
    .catch((err) => {
      console.error('Mysql连接失败，错误原因', err);
    });
};

export { initMysql, mysqlConnection };
