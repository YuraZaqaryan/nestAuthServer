import { Controller, Post, Body, Get } from '@nestjs/common';
import { createUser } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}
    @Post()
    create(@Body() dto: createUser){
        return this.userService.createUser(dto)
    }
    @Post()
    getUserName(@Body() username: string){
        return this.userService.getOneUser(username)
    }
    @Get()
    getAll(){
        return this.userService.getUsers()
    }
}
