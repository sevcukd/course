import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        id: any;
        name: any;
        email: any;
    }>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<{
        status: boolean;
        result: [];
    }>;
    update(id: string, createUserDto: CreateUserDto): Promise<any>;
    remove(id: string): Promise<string>;
}
