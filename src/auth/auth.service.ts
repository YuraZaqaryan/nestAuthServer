import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { createUser } from 'src/users/dto/create-user.dto';
import * as bcrypt from "bcryptjs"
import { Users } from 'src/users/users.model';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService) { }
    async signUp(dto: createUser) {
        const ckeckUser = await this.userService.getOneUser(dto.username);
        if (ckeckUser) {
            throw new HttpException("User already is busy", HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(dto.password, 5);
        const user = await this.userService.createUser({ ...dto, password: hashPassword })
        return user;
    }
    async signIn(dto: createUser) {
        const user = await this.userService.validateUser(dto)
        return this.generateToken(user)
    }
    private async generateToken(user: Users) {
        const payload = {id: user.id, username: user.username}
        return{
            token: this.jwtService.sign(payload)
        }
    }
}
