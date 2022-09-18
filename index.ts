import express from 'express';
import bodyParser from 'body-parser';
import { initMysql } from './models';
import routes from './routes';
import config from './config';

const app = express();

// 处理传递参数 body
app.use(bodyParser.json());

// 链接mysql
initMysql(app);

// 初始化路由
routes(app);

const port = config.get('port');
app.listen(port, () => {
  console.log(`Express : http://localhost:${port}`);
});
