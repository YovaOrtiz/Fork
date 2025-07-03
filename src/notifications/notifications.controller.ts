import {
  Controller, Get, Post, Put, Delete, Param, Body, Query, HttpException, HttpStatus
} from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { z } from 'zod';
import { CreateNotificationSchema } from './dto/create-notification.dto';
import { UpdateNotificationSchema } from './dto/update-notification.dto';
import { FilterNotificationSchema } from './dto/filter-notification.dto';
import { CreateChannelSchema } from './dto/create-channel.dto';
import { UpdateChannelSchema } from './dto/update-channel.dto';
import { CreateSettingSchema } from './dto/create-setting.dto';
import { UpdateSettingSchema } from './dto/update-setting.dto';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  // --- NOTIFICATIONS CRUD & FILTER ---
  @Get()
  async getNotifications(@Query() query: any) {
    const filter = FilterNotificationSchema.safeParse(query);
    if (!filter.success) throw new HttpException(filter.error.format(), HttpStatus.BAD_REQUEST);
    return this.notificationsService.getNotifications(filter.data);
  }

  @Get(':id')
  async getNotificationById(@Param('id') id: string) {
    return this.notificationsService.getNotificationById(id);
  }

  @Post()
  async createNotification(@Body() body: any) {
    const parsed = CreateNotificationSchema.safeParse(body);
    if (!parsed.success) throw new HttpException(parsed.error.format(), HttpStatus.BAD_REQUEST);
    return this.notificationsService.createNotification(parsed.data);
  }

  @Put(':id')
  async updateNotification(@Param('id') id: string, @Body() body: any) {
    const parsed = UpdateNotificationSchema.safeParse(body);
    if (!parsed.success) throw new HttpException(parsed.error.format(), HttpStatus.BAD_REQUEST);
    return this.notificationsService.updateNotification(id, parsed.data);
  }

  @Delete(':id')
  async deleteNotification(@Param('id') id: string) {
    return this.notificationsService.deleteNotification(id);
  }

  @Put(':id/read')
  async markAsRead(@Param('id') id: string) {
    return this.notificationsService.markAsRead(id);
  }

  @Put('mark-all-read/:userId')
  async markAllAsRead(@Param('userId') userId: string) {
    return this.notificationsService.markAllAsRead(Number(userId));
  }

  // --- CHANNELS CRUD ---
  @Get('/channels/:userId')
  async getChannels(@Param('userId') userId: string) {
    return this.notificationsService.getChannels(Number(userId));
  }

  @Post('/channels')
  async createChannel(@Body() body: any) {
    const parsed = CreateChannelSchema.safeParse(body);
    if (!parsed.success) throw new HttpException(parsed.error.format(), HttpStatus.BAD_REQUEST);
    return this.notificationsService.createChannel(parsed.data);
  }

  @Put('/channels/:id')
  async updateChannel(@Param('id') id: string, @Body() body: any) {
    const parsed = UpdateChannelSchema.safeParse(body);
    if (!parsed.success) throw new HttpException(parsed.error.format(), HttpStatus.BAD_REQUEST);
    return this.notificationsService.updateChannel(id, parsed.data);
  }

  @Delete('/channels/:id')
  async deleteChannel(@Param('id') id: string) {
    return this.notificationsService.deleteChannel(id);
  }

  // --- SETTINGS CRUD ---
  @Get('/settings/:userId')
  async getSettings(@Param('userId') userId: string) {
    return this.notificationsService.getSettings(Number(userId));
  }

  @Post('/settings')
  async createSetting(@Body() body: any) {
    const parsed = CreateSettingSchema.safeParse(body);
    if (!parsed.success) throw new HttpException(parsed.error.format(), HttpStatus.BAD_REQUEST);
    return this.notificationsService.createSetting(parsed.data);
  }

  @Put('/settings/:id')
  async updateSetting(@Param('id') id: string, @Body() body: any) {
    const parsed = UpdateSettingSchema.safeParse(body);
    if (!parsed.success) throw new HttpException(parsed.error.format(), HttpStatus.BAD_REQUEST);
    return this.notificationsService.updateSetting(id, parsed.data);
  }

  @Delete('/settings/:id')
  async deleteSetting(@Param('id') id: string) {
    return this.notificationsService.deleteSetting(id);
  }

  // --- STATISTICS ---
  @Get('/stats/:userId')
  async getStats(@Param('userId') userId: string) {
    return this.notificationsService.getStats(Number(userId));
  }

  // --- SEND TEST NOTIFICATION (mock) ---
  @Post('/send-test')
  async sendTestNotification(@Body() body: any) {
    // Aquí puedes integrar lógica real de envío por canal
    return { success: true, message: 'Notificación de prueba enviada (mock)', data: body };
  }
}
