import { Module } from '@nestjs/common';
import { UsersController } from './core/users/users.controller';
import { UsersService } from './core/users/users.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
