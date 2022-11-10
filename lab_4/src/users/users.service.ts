import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {
  }
  async create(createUserDto: CreateUserDto) {
    return this.usersRepository.createUser({ dto: createUserDto })
  }

  async findAll() {
    return this.usersRepository.find({ id: 0 });
  }

  async findOne(id) {
    return this.usersRepository.find({id: id});
  }

  async update(id: string, name:string,email:string) {
    return this.usersRepository.updateUser({id: id, name,email})
  }

  async remove(id: number) {
    return this.usersRepository.deleteUser({id: id})
  }
}
