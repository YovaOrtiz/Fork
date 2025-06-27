import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

/**
 * DTO para login de usuario
 */
export class LoginDto {
  @IsString()
  @IsNotEmpty()
  usernameOrEmail: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
