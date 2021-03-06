import Users from '../infra/typeorm/entities/Users';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

interface IUserRepository {
  create(data: ICreateUserDTO): Promise<Users>;
  findByEmail(email: string): Promise<Users | undefined>;
}

export default IUserRepository;
