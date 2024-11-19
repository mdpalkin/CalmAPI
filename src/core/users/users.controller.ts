import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, User } from './dtos';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(): User[] {
    return this.usersService.getAllUsers();
  }
  @Get(':id')
  getUserById(@Param('id') id: number) {
    return this.usersService.getUserById(id);
  }
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }
  @Delete()
  deleteUser(@Param('id') id: number) {
    return this.usersService.deleteUserById(id)
  }
  @Patch(':id')
  updateUser(@Param('id') id: number, @Body() updateUser: CreateUserDto) {
    return this.usersService.updateUserById(id, updateUser);
  }
}
