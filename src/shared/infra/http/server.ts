import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import '@shared/infra/typeorm';
import AppError from '@shared/errors/AppError';
import '@shared/container';

import routes from './routes/index';

const app = express();
app.use(express.json());
app.use(routes);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});
app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('Server started at port 3333');
});
