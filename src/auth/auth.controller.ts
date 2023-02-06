import { Body, Controller, Post } from '@nestjs/common';
import { createUser } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}
    @Post('/registration')
    registration(@Body() dto: createUser){
        return this.authService.signUp(dto)
    }

    @Post('/login')
    login(@Body() dto: createUser){
        return this.authService.signIn(dto)
    }
}
