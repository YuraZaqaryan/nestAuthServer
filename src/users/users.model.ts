import {Table, Model, Column, DataType} from "sequelize-typescript"

interface usersInterface {
    username: string;
    password: string
}
@Table({tableName: "users"})
export class Users extends Model <Users, usersInterface>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id:number
    @Column({type: DataType.STRING, unique: true})
    username: string
    @Column({type: DataType.STRING})
    password: string
}