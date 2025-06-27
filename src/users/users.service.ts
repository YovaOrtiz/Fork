import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
  // --- Métodos para recuperación y confirmación ---
  async saveResetToken(userId: number, token: string) {
    return this.prisma.user.update({ where: { id: userId }, data: { resetToken: token, resetTokenExp: new Date(Date.now() + 1000 * 60 * 30) } });
  }
  async findByResetToken(token: string) {
    return this.prisma.user.findFirst({ where: { resetToken: token, resetTokenExp: { gte: new Date() } } });
  }
  async updatePassword(userId: number, hash: string) {
    return this.prisma.user.update({ where: { id: userId }, data: { password: hash } });
  }
  async clearResetToken(userId: number) {
    return this.prisma.user.update({ where: { id: userId }, data: { resetToken: null, resetTokenExp: null } });
  }
  async saveEmailToken(userId: number, token: string) {
    return this.prisma.user.update({ where: { id: userId }, data: { emailToken: token } });
  }
  async findByEmailToken(token: string) {
    return this.prisma.user.findFirst({ where: { emailToken: token } });
  }
  async confirmEmail(userId: number) {
    return this.prisma.user.update({ where: { id: userId }, data: { emailConfirmed: true, emailToken: null } });
  }
    constructor(private prisma: PrismaService) {}

    getUsers(){
        return this.prisma.user.findMany();
    }

    async findByEmail(email: string) {
        return this.prisma.user.findUnique({ where: { email } });
    }

    async findByUsername(username: string) {
        return this.prisma.user.findUnique({ where: { username } });
    }

    async create(data: { email: string; name: string; password: string; username: string }) {
        return this.prisma.user.create({ data });
    }

    async createUser(user: CreateUserDto){
        const bcrypt = require('bcrypt');
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return this.prisma.user.create({
            data: {
                email: user.email,
                name: user.name,
                username: user.username,
                password: hashedPassword,
                role: user.role || 'user',
            }
        });
    }

    async updateUser(id: string, updates: any) {
        // No actualizar password aquí (solo por endpoint dedicado)
        const { password, ...rest } = updates;
        return this.prisma.user.update({
            where: { id: Number(id) },
            data: rest,
        });
    }

    async deleteUser(id: string) {
        return this.prisma.user.delete({
            where: { id: Number(id) },
        });
    }
}
