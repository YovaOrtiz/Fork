import { Controller, Post, Body, Get, UnauthorizedException } from '@nestjs/common';
import { PasswordResetRequestDto, PasswordResetDto } from './password-reset.dto';
import { EmailConfirmDto } from './email-confirm.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // --- Recuperación de contraseña ---
  @Post('password-reset-request')
  async passwordResetRequest(@Body() dto: PasswordResetRequestDto) {
    return this.authService.requestPasswordReset(dto.email);
  }

  @Post('password-reset')
  async passwordReset(@Body() dto: PasswordResetDto) {
    return this.authService.resetPassword(dto.token, dto.newPassword);
  }

  // --- Confirmación de email ---
  @Post('send-confirm-email')
  async sendConfirmEmail(@Body() dto: PasswordResetRequestDto) {
    return this.authService.sendConfirmationEmail(dto.email);
  }

  @Post('confirm-email')
  async confirmEmail(@Body() dto: EmailConfirmDto) {
    return this.authService.confirmEmail(dto.email, dto.token);
  }

  /**
   * Endpoint para login usando LoginDto
   */
  @Post('login')
  @ApiOperation({ summary: 'Login de usuario' })
  @ApiBody({ type: LoginDto })
  @ApiResponse({ status: 201, description: 'Login exitoso' })
  @ApiResponse({ status: 401, description: 'Credenciales incorrectas' })
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }


  /**
   * Endpoint para registro usando RegisterDto
   */
  @Post('register')
  @ApiOperation({ summary: 'Registro de usuario' })
  @ApiBody({ type: RegisterDto })
  @ApiResponse({ status: 201, description: 'Usuario registrado correctamente' })
  @ApiResponse({ status: 400, description: 'El email ya está registrado' })
  async register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Get('register')
  @ApiOperation({ summary: 'Ejemplo de datos para registro de usuario' })
  @ApiResponse({ status: 200, description: 'Ejemplo de datos para registro' })
  getRegisterExample() {
    return [
      {
        name: 'Jovani',
        email: 'jovani@example.com',
        password: '123456',
      },
      {
        name: 'Ana',
        email: 'ana@example.com',
        password: 'abcdef',
      },
      {
        name: 'Luis',
        email: 'luis@example.com',
        password: 'qwerty1',
      }
    ];
  }
}
