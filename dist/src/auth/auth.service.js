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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const users_service_1 = require("../users/users.service");
const crypto = require("crypto");
let AuthService = class AuthService {
    usersService;
    jwtService;
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async login(dto) {
        let user = await this.usersService.findByEmail(dto.usernameOrEmail);
        if (!user) {
            user = await this.usersService.findByUsername(dto.usernameOrEmail);
        }
        if (!user) {
            throw new common_1.UnauthorizedException('Credenciales incorrectas');
        }
        const isPasswordValid = await bcrypt.compare(dto.password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Credenciales incorrectas');
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
    async register(dto) {
        try {
            const existingEmail = await this.usersService.findByEmail(dto.email);
            if (existingEmail) {
                throw new common_1.BadRequestException('El email ya está registrado');
            }
            const existingUsername = await this.usersService.findByUsername(dto.username);
            if (existingUsername) {
                throw new common_1.BadRequestException('El nombre de usuario ya está en uso');
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
        }
        catch (error) {
            console.error('Error en registro:', error);
            throw new common_1.BadRequestException('Error en registro: ' + (error?.message || error));
        }
    }
    async validateUser(email, password) {
        const user = await this.usersService.findByEmail(email);
        if (user && await bcrypt.compare(password, user.password)) {
            return user;
        }
        return null;
    }
    async requestPasswordReset(email) {
        const user = await this.usersService.findByEmail(email);
        if (!user)
            throw new common_1.NotFoundException('Usuario no encontrado');
        const token = crypto.randomBytes(32).toString('hex');
        await this.usersService.saveResetToken(user.id, token);
        return { message: 'Se ha generado un token para restablecer la contraseña' };
    }
    async resetPassword(token, newPassword) {
        const user = await this.usersService.findByResetToken(token);
        if (!user)
            throw new common_1.ForbiddenException('Token inválido o expirado');
        const hashed = await bcrypt.hash(newPassword, 10);
        await this.usersService.updatePassword(user.id, hashed);
        await this.usersService.clearResetToken(user.id);
        return { message: 'Contraseña actualizada correctamente' };
    }
    async sendConfirmationEmail(email) {
        const user = await this.usersService.findByEmail(email);
        if (!user)
            throw new common_1.NotFoundException('Usuario no encontrado');
        const token = crypto.randomBytes(32).toString('hex');
        await this.usersService.saveEmailToken(user.id, token);
        return { message: 'Se ha generado un token de confirmación' };
    }
    async confirmEmail(email, token) {
        const user = await this.usersService.findByEmailToken(token);
        if (!user || user.email !== email)
            throw new common_1.ForbiddenException('Token inválido');
        await this.usersService.confirmEmail(user.id);
        return { message: 'Email confirmado correctamente' };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map