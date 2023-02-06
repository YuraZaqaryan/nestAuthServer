import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize"
import { createUser } from './dto/create-user.dto';
import { Users } from './users.model';
import * as bcrypt from "bcryptjs"

@Injectable()
export class UsersService {
    constructor(@InjectModel(Users) private userRepository: typeof Users ){}
    async createUser(dto: createUser){
        const user = await this.userRepository.create(dto)
        return user;
    }
    async getOneUser(username: string){
        const user = await this.userRepository.findOne({where: {username}})
        return user;
    }
    async getUsers() {
        const users = await this.userRepository.findAll()
        return users;
    }
    async validateUser(dto: createUser) {
        const user = await this.getOneUser(dto.username);
        const password = await bcrypt.compare(dto.password, user ? user.password : "")
        if (user && password) {
            return user;
        }
        throw new UnauthorizedException({message: "Login or password is wrong!"})
    }
}
