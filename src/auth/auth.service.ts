import { Injectable, UnauthorizedException, ConflictException, BadRequestException, NotFoundException, ForbiddenException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import * as crypto from 'crypto';
// import * as nodemailer from 'nodemailer';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(dto: LoginDto) {
    // Buscar usuario por username o email
    let user = await this.usersService.findByEmail(dto.usernameOrEmail);
    if (!user) {
      user = await this.usersService.findByUsername(dto.usernameOrEmail);
    }
    if (!user) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }
    const isPasswordValid = await bcrypt.compare(dto.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }
    const payload = { sub: user.id, email: user.email, username: user.username, name: user.name };
    return {
      token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    };
  }

  async register(dto: RegisterDto) {
    try {
      // Verificar unicidad de username y email
      const existingEmail = await this.usersService.findByEmail(dto.email);
      if (existingEmail) {
        throw new BadRequestException('El email ya está registrado');
      }
      const existingUsername = await this.usersService.findByUsername(dto.username);
      if (existingUsername) {
        throw new BadRequestException('El nombre de usuario ya está en uso');
      }
      const hashedPassword = await bcrypt.hash(dto.password, 10);
      const user = await this.usersService.create({
        username: dto.username,
        email: dto.email,
        name: dto.name,
        password: hashedPassword,
      });
      const payload = { sub: user.id, email: user.email, username: user.username, name: user.name };
      return {
        token: this.jwtService.sign(payload),
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          name: user.name,
          role: user.role,
        },
      };
    } catch (error) {
      console.error('Error en registro:', error);
      // Para depuración, muestra el error real
      throw new BadRequestException('Error en registro: ' + (error?.message || error));
    }
  }

  // Helper opcional para Passport Strategy
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }
    return null;
  }

  // --- Recuperación de contraseña ---
  async requestPasswordReset(email: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) throw new NotFoundException('Usuario no encontrado');
    const token = crypto.randomBytes(32).toString('hex');
    await this.usersService.saveResetToken(user.id, token);
    // await this.sendEmail(email, 'Recuperación de contraseña', `Tu token: ${token}`);
    return { message: 'Se ha generado un token para restablecer la contraseña' };
  }

  async resetPassword(token: string, newPassword: string) {
    const user = await this.usersService.findByResetToken(token);
    if (!user) throw new ForbiddenException('Token inválido o expirado');
    const hashed = await bcrypt.hash(newPassword, 10);
    await this.usersService.updatePassword(user.id, hashed);
    await this.usersService.clearResetToken(user.id);
    return { message: 'Contraseña actualizada correctamente' };
  }

  // --- Confirmación de email ---
  async sendConfirmationEmail(email: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) throw new NotFoundException('Usuario no encontrado');
    const token = crypto.randomBytes(32).toString('hex');
    await this.usersService.saveEmailToken(user.id, token);
    // await this.sendEmail(email, 'Confirma tu email', `Tu token: ${token}`);
    return { message: 'Se ha generado un token de confirmación' };
  }

  async confirmEmail(email: string, token: string) {
    const user = await this.usersService.findByEmailToken(token);
    if (!user || user.email !== email) throw new ForbiddenException('Token inválido');
    await this.usersService.confirmEmail(user.id);
    return { message: 'Email confirmado correctamente' };
  }

  // --- Utilidad para enviar correos ---
  /*
  async sendEmail(to: string, subject: string, text: string) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject,
      text,
    });
  }
  */
}
