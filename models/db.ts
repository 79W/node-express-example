import { Express } from 'express';
import mongoose from 'mongoose';
import { Sequelize } from 'sequelize';
import Config from '../config';
import logger from '../logger';

const sequelizeExample = new Sequelize({
  ...Config.get('mysql_config'),
  logging: (sql: string, timing?: number) => {
    logger.debug(sql);
  },
});

const initMysql = async () => {
  try {
    await sequelizeExample.authenticate();
    logger.info('MySQL database connection succeeded.');
  } catch (error) {
    logger.error(`MySQL database link error: ${error}`);
  }

  return sequelizeExample;
};

const initMongo = async () => {
  const uri = Config.get('mongodb_config').uri;
  try {
    await mongoose.connect(uri);
    logger.info('Mongoose database connection succeeded.');
  } catch (error) {
    logger.error(`Mongoose database link error: ${error}`);
  }
};

const initDB = async (app: Express) => {
  initMongo();
  initMysql();
};

export { sequelizeExample };
export default initDB;
