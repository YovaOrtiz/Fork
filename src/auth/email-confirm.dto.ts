import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class EmailConfirmDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  token: string;
}
