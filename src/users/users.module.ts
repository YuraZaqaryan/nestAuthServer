import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { Users } from './users.model';
import { UsersService } from './users.service';
import {SequelizeModule} from '@nestjs/sequelize'


@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([Users])
  ],
  exports: [UsersService]
})
export class UsersModule {}
