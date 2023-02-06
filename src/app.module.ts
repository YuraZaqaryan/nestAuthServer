import { Module } from "@nestjs/common";
import { UsersModule } from './users/users.module';
import {SequelizeModule} from '@nestjs/sequelize'
import { Users } from "./users/users.model";
import { AuthModule } from './auth/auth.module';

@Module({
    controllers: [],
    providers: [],
    imports: [
        SequelizeModule.forRoot({
            dialect: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "6691",
            database: "nest-server",
            models: [Users],
            autoLoadModels: true
        }),
        UsersModule,
        AuthModule
    ]
})
export class AppModule {}
