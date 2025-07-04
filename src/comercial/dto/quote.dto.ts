import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString, IsOptional, IsNumber, IsArray, ValidateNested, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';

export enum QuoteStatus {
  BORRADOR = 'Borrador',
  ENVIADA = 'Enviada',
  ACEPTADA = 'Aceptada',
  RECHAZADA = 'Rechazada',
}

export class QuoteItemDto {
  @ApiProperty() @IsString() @IsNotEmpty() productId: string;
  @ApiProperty() @IsString() @IsNotEmpty() productName: string;
  @ApiProperty() @IsNumber() quantity: number;
  @ApiProperty() @IsNumber() unitPrice: number;
}

export class CreateQuoteDto {
  @ApiProperty() @IsString() @IsNotEmpty() leadId: string;
  @ApiProperty() @IsString() @IsNotEmpty() leadName: string;
  @ApiProperty({ enum: QuoteStatus }) @IsEnum(QuoteStatus) status: QuoteStatus;
  @ApiProperty({ type: [QuoteItemDto] }) @IsArray() @ArrayMinSize(1) @ValidateNested({ each: true }) @Type(() => QuoteItemDto) items: QuoteItemDto[];
  @ApiProperty({ required: false }) @IsString() @IsOptional() conditions?: string;
}

export class UpdateQuoteDto {
  @ApiProperty({ required: false }) @IsString() @IsOptional() leadId?: string;
  @ApiProperty({ required: false }) @IsString() @IsOptional() leadName?: string;
  @ApiProperty({ required: false, enum: QuoteStatus }) @IsEnum(QuoteStatus) @IsOptional() status?: QuoteStatus;
  @ApiProperty({ required: false, type: [QuoteItemDto] }) @IsArray() @ValidateNested({ each: true }) @Type(() => QuoteItemDto) @IsOptional() items?: QuoteItemDto[];
  @ApiProperty({ required: false }) @IsString() @IsOptional() conditions?: string;
}
