"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let UsersService = class UsersService {
    prisma;
    async saveResetToken(userId, token) {
        return this.prisma.user.update({ where: { id: userId }, data: { resetToken: token, resetTokenExp: new Date(Date.now() + 1000 * 60 * 30) } });
    }
    async findByResetToken(token) {
        return this.prisma.user.findFirst({ where: { resetToken: token, resetTokenExp: { gte: new Date() } } });
    }
    async updatePassword(userId, hash) {
        return this.prisma.user.update({ where: { id: userId }, data: { password: hash } });
    }
    async clearResetToken(userId) {
        return this.prisma.user.update({ where: { id: userId }, data: { resetToken: null, resetTokenExp: null } });
    }
    async saveEmailToken(userId, token) {
        return this.prisma.user.update({ where: { id: userId }, data: { emailToken: token } });
    }
    async findByEmailToken(token) {
        return this.prisma.user.findFirst({ where: { emailToken: token } });
    }
    async confirmEmail(userId) {
        return this.prisma.user.update({ where: { id: userId }, data: { emailConfirmed: true, emailToken: null } });
    }
    constructor(prisma) {
        this.prisma = prisma;
    }
    getUsers() {
        return this.prisma.user.findMany();
    }
    async findByEmail(email) {
        return this.prisma.user.findUnique({ where: { email } });
    }
    async findByUsername(username) {
        return this.prisma.user.findUnique({ where: { username } });
    }
    async create(data) {
        return this.prisma.user.create({ data });
    }
    async createUser(user) {
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
    async updateUser(id, updates) {
        const { password, ...rest } = updates;
        return this.prisma.user.update({
            where: { id: Number(id) },
            data: rest,
        });
    }
    async deleteUser(id) {
        return this.prisma.user.delete({
            where: { id: Number(id) },
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map