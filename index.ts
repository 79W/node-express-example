import express from 'express';
import routes from './routes';
import config from './config';

const app = express();
routes(app);

const port = config.get('port');
app.listen(port, () => {
  console.log(`Express : http://localhost:${port}`);
});
