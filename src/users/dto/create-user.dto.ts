import { IsEmail, IsNotEmpty, IsNumber, IsString, Max } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    role?: string; // Opcional, por defecto 'user'
}