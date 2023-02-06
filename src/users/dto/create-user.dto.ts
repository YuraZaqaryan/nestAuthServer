import {Length} from "class-validator";

export class createUser {
    @Length(6,20, {message: "Must be not less than 6, and more than 20"})
    readonly username : string;
    @Length(8,22, {message: "Must be not less than 8, and more than 22"})
    readonly password : string;
}