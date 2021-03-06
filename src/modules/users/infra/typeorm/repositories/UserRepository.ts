import { Repository, getRepository } from 'typeorm';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import Users from '../entities/Users';

class UserRepository implements IUserRepository {
  private userRepository: Repository<Users>;

  constructor() {
    this.userRepository = getRepository(Users);
  }

  public async create({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<Users> {
    const user = this.userRepository.create({ name, email, password });

    await this.userRepository.save(user);

    return user;
  }

  public async findByEmail(email: string): Promise<Users | undefined> {
    const user = await this.userRepository.findOne({ where: { email } });

    return user;
  }
}

export default UserRepository;
