import { Router, Request, Response } from 'express';
import CreateUserService from '@modules/users/services/CreateUserService';
import UserRepository from '../../typeorm/repositories/UserRepository';

const userRouter = Router();

userRouter.post('/', async (req: Request, res: Response) => {
  const userRepository = new UserRepository();

  const { name, email, password } = req.body;

  const createUser = new CreateUserService(userRepository);

  const user = await createUser.execute({ email, name, password });

  delete user.password;

  return res.json(user);
});

export default userRouter;
