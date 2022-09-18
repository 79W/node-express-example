// 创建路由对象，并编写路由，然后导出
import { Router, Express } from 'express';
import { insertRouter } from '../../utils';
import loginRouter from './login';
import userRouter from './user';

export default (app: Express): Router => {
  const router = Router();
  insertRouter(router, [userRouter, loginRouter]);

  return router;
};
