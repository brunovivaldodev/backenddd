import { Router } from 'express';
import sessionsRouter from '@modules/users/infra/http/routes/Sessions.routes';
import userRouter from '@modules/users/infra/http/routes/Users.routes';
import testeRouter from './teste.routes';

const routes = Router();
routes.use('/test', testeRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/users', userRouter);

export default routes;
