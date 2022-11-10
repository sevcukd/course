import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from "./users.repository";
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    create(createUserDto: CreateUserDto): Promise<{
        id: any;
        name: any;
        email: any;
    }>;
    findAll(): Promise<any>;
    findOne(id: any): Promise<any>;
    update(id: string, name: string, email: string): Promise<any>;
    remove(id: number): Promise<string>;
}
