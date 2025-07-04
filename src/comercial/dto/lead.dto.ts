import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export enum LeadStatus {
  NUEVO = 'Nuevo',
  EN_CONTACTO = 'En Contacto',
  CALIFICADO = 'Calificado',
  DESCARTADO = 'Descartado',
  CONVERTIDO = 'Convertido',
}

export class CreateLeadDto {
  @ApiProperty() @IsString() @IsNotEmpty() name: string;
  @ApiProperty() @IsString() @IsNotEmpty() company: string;
  @ApiProperty() @IsString() @IsNotEmpty() contact: string;
  @ApiProperty({ enum: LeadStatus }) @IsEnum(LeadStatus) status: LeadStatus;
  @ApiProperty() @IsString() @IsNotEmpty() source: string;
  @ApiProperty({ required: false }) @IsString() @IsOptional() notes?: string;
  @ApiProperty() @IsString() @IsNotEmpty() assignedTo: string;
}

export class UpdateLeadDto {
  @ApiProperty({ required: false }) @IsString() @IsOptional() name?: string;
  @ApiProperty({ required: false }) @IsString() @IsOptional() company?: string;
  @ApiProperty({ required: false }) @IsString() @IsOptional() contact?: string;
  @ApiProperty({ required: false, enum: LeadStatus }) @IsEnum(LeadStatus) @IsOptional() status?: LeadStatus;
  @ApiProperty({ required: false }) @IsString() @IsOptional() source?: string;
  @ApiProperty({ required: false }) @IsString() @IsOptional() notes?: string;
  @ApiProperty({ required: false }) @IsString() @IsOptional() assignedTo?: string;
}
