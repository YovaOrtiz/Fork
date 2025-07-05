import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
// import { HelloController } from './hello/hello.controller';
// import { PaymentsModule } from './payments/payments.module';
import { DashboardModule } from './dashboard/dashboard.module';
import {TasksModule}from "./tasks/tasks.module"
import { NotificationsModule } from './notifications/notifications.module';
import { SolicitudesModule } from './solicitudes/solicitudes.module';
import { ComercialModule } from './comercial/comercial.module';
import { ComprasLogisticaModule } from './compras-logistica/compras-logistica.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TasksModule,
    ProjectsModule,
    AuthModule,
    UsersModule,
    DashboardModule,
    NotificationsModule,
    SolicitudesModule,
    ComercialModule,
    ComprasLogisticaModule,
  ],
  controllers: [],
})
export class AppModule {}
