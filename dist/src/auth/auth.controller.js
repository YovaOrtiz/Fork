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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const password_reset_dto_1 = require("./password-reset.dto");
const email_confirm_dto_1 = require("./email-confirm.dto");
const auth_service_1 = require("./auth.service");
const login_dto_1 = require("./dto/login.dto");
const register_dto_1 = require("./dto/register.dto");
const swagger_1 = require("@nestjs/swagger");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async passwordResetRequest(dto) {
        return this.authService.requestPasswordReset(dto.email);
    }
    async passwordReset(dto) {
        return this.authService.resetPassword(dto.token, dto.newPassword);
    }
    async sendConfirmEmail(dto) {
        return this.authService.sendConfirmationEmail(dto.email);
    }
    async confirmEmail(dto) {
        return this.authService.confirmEmail(dto.email, dto.token);
    }
    async login(dto) {
        return this.authService.login(dto);
    }
    async register(dto) {
        return this.authService.register(dto);
    }
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
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('password-reset-request'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [password_reset_dto_1.PasswordResetRequestDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "passwordResetRequest", null);
__decorate([
    (0, common_1.Post)('password-reset'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [password_reset_dto_1.PasswordResetDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "passwordReset", null);
__decorate([
    (0, common_1.Post)('send-confirm-email'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [password_reset_dto_1.PasswordResetRequestDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "sendConfirmEmail", null);
__decorate([
    (0, common_1.Post)('confirm-email'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [email_confirm_dto_1.EmailConfirmDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "confirmEmail", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiOperation)({ summary: 'Login de usuario' }),
    (0, swagger_1.ApiBody)({ type: login_dto_1.LoginDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Login exitoso' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Credenciales incorrectas' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('register'),
    (0, swagger_1.ApiOperation)({ summary: 'Registro de usuario' }),
    (0, swagger_1.ApiBody)({ type: register_dto_1.RegisterDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Usuario registrado correctamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'El email ya está registrado' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Get)('register'),
    (0, swagger_1.ApiOperation)({ summary: 'Ejemplo de datos para registro de usuario' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Ejemplo de datos para registro' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getRegisterExample", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map