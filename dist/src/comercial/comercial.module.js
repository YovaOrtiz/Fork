"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComercialModule = void 0;
const common_1 = require("@nestjs/common");
const comercial_controller_1 = require("./comercial.controller");
const comercial_service_1 = require("./comercial.service");
let ComercialModule = class ComercialModule {
};
exports.ComercialModule = ComercialModule;
exports.ComercialModule = ComercialModule = __decorate([
    (0, common_1.Module)({
        controllers: [comercial_controller_1.ComercialController],
        providers: [comercial_service_1.ComercialService],
    })
], ComercialModule);
//# sourceMappingURL=comercial.module.js.map