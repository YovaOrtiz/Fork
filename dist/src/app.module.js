"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const projects_module_1 = require("./projects/projects.module");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const dashboard_module_1 = require("./dashboard/dashboard.module");
const tasks_module_1 = require("./tasks/tasks.module");
const notifications_module_1 = require("./notifications/notifications.module");
const solicitudes_module_1 = require("./solicitudes/solicitudes.module");
const comercial_module_1 = require("./comercial/comercial.module");
const compras_logistica_module_1 = require("./compras-logistica/compras-logistica.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            tasks_module_1.TasksModule,
            projects_module_1.ProjectsModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            dashboard_module_1.DashboardModule,
            notifications_module_1.NotificationsModule,
            solicitudes_module_1.SolicitudesModule,
            comercial_module_1.ComercialModule,
            compras_logistica_module_1.ComprasLogisticaModule,
        ],
        controllers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map