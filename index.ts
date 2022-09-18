import express from 'express';
import bodyParser from 'body-parser';
import initDB from './models/db';
import routes from './routes';
import config from './config';

import logger from './logger';

const app = express();

// 处理传递参数 body
app.use(bodyParser.json());

// 链接mysql 链接mongo
initDB(app);

// 初始化路由
routes(app);

const port = config.get('port');
app.listen(port, () => {
  logger.info(`Express : http://localhost:${port}`);
});
