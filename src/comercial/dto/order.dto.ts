import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString, IsOptional, IsNumber, IsArray, ValidateNested, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';

export enum OrderStatus {
  PENDIENTE = 'Pendiente',
  EN_PROCESO = 'En Proceso',
  FABRICACION = 'Fabricación',
  ENVIADO = 'Enviado',
  COMPLETADO = 'Completado',
  CANCELADO = 'Cancelado',
}

export class OrderItemDto {
  @ApiProperty() @IsString() @IsNotEmpty() productId: string;
  @ApiProperty() @IsString() @IsNotEmpty() productName: string;
  @ApiProperty() @IsNumber() quantity: number;
  @ApiProperty() @IsNumber() unitPrice: number;
}

export class CreateOrderDto {
  @ApiProperty() @IsString() @IsNotEmpty() clientId: string;
  @ApiProperty() @IsString() @IsNotEmpty() clientName: string;
  @ApiProperty() @IsString() @IsNotEmpty() projectId: string;
  @ApiProperty({ enum: OrderStatus }) @IsEnum(OrderStatus) status: OrderStatus;
  @ApiProperty({ type: [OrderItemDto] }) @IsArray() @ArrayMinSize(1) @ValidateNested({ each: true }) @Type(() => OrderItemDto) items: OrderItemDto[];
  @ApiProperty({ required: false }) @IsNumber() @IsOptional() total?: number;
  @ApiProperty() @IsString() @IsNotEmpty() deliveryDate: string;
  @ApiProperty() @IsString() @IsNotEmpty() assignedTo: string;
  @ApiProperty({ required: false }) @IsString() @IsOptional() notes?: string;
}

export class UpdateOrderDto {
  @ApiProperty({ required: false }) @IsString() @IsOptional() clientId?: string;
  @ApiProperty({ required: false }) @IsString() @IsOptional() clientName?: string;
  @ApiProperty({ required: false }) @IsString() @IsOptional() projectId?: string;
  @ApiProperty({ required: false, enum: OrderStatus }) @IsEnum(OrderStatus) @IsOptional() status?: OrderStatus;
  @ApiProperty({ required: false, type: [OrderItemDto] }) @IsArray() @ValidateNested({ each: true }) @Type(() => OrderItemDto) @IsOptional() items?: OrderItemDto[];
  @ApiProperty({ required: false }) @IsNumber() @IsOptional() total?: number;
  @ApiProperty({ required: false }) @IsString() @IsOptional() deliveryDate?: string;
  @ApiProperty({ required: false }) @IsString() @IsOptional() assignedTo?: string;
  @ApiProperty({ required: false }) @IsString() @IsOptional() notes?: string;
}
