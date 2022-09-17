import { Express } from 'express';
import apiRouter from './api';

export default (app: Express) => {
  app.use('/api', apiRouter(app));
};
