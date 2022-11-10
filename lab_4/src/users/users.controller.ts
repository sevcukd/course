import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return  await this.usersService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<{ status: boolean, result: [] }> {
    const result = await this.usersService.findOne(id);
    return {status: true, result}
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() createUserDto: CreateUserDto) {
    return await this.usersService.update(id, createUserDto.name, createUserDto.email);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.usersService.remove(+id);
  }
}
