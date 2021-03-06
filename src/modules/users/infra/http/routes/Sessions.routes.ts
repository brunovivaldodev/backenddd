import { Router } from 'express';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

import UserRepository from '@modules/users/infra/typeorm/repositories/UserRepository';

const sessionsRouter = Router();

sessionsRouter.post('/', async (req, res) => {
  const userRepository = new UserRepository();

  const { email, password } = req.body;
  const authenticateUserService = new AuthenticateUserService(userRepository);

  const { user, token } = await authenticateUserService.execute({
    email,
    password,
  });

  delete user.password;

  res.json({
    user,
    token,
  });
});

export default sessionsRouter;
