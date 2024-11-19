import { Injectable } from '@nestjs/common';
import { CreateUserDto, User } from './dtos';

@Injectable()
export class UsersService {
  private users: User[] = [];
  getAllUsers(): User[] {
    return this.users;
  }
  createUser(user: CreateUserDto) {
    const newUser = { ...user, id: this.users.length + 1 };
    this.users.push(newUser);
  }
  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
  updateUserById(id: number, updateInfo: CreateUserDto) {
    const index = this.users.findIndex((user) => user.id === +id);
    const user = { ...updateInfo, id };
    this.users.splice(index, 1, user);
  }
  deleteUserById(id: number) {
    const index = this.users.findIndex((user) => user.id === id);
    this.users.splice(index, 1);
  }
}
