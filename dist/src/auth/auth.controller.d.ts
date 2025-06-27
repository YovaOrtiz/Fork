import { PasswordResetRequestDto, PasswordResetDto } from './password-reset.dto';
import { EmailConfirmDto } from './email-confirm.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    passwordResetRequest(dto: PasswordResetRequestDto): Promise<{
        message: string;
    }>;
    passwordReset(dto: PasswordResetDto): Promise<{
        message: string;
    }>;
    sendConfirmEmail(dto: PasswordResetRequestDto): Promise<{
        message: string;
    }>;
    confirmEmail(dto: EmailConfirmDto): Promise<{
        message: string;
    }>;
    login(dto: LoginDto): Promise<{
        token: string;
        user: {
            id: number;
            username: string;
            email: string;
            name: string;
            role: string;
        };
    }>;
    register(dto: RegisterDto): Promise<{
        token: string;
        user: {
            id: number;
            username: string;
            email: string;
            name: string;
            role: string;
        };
    }>;
    getRegisterExample(): {
        name: string;
        email: string;
        password: string;
    }[];
}
