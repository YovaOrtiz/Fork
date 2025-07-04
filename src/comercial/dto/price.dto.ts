import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreatePriceDto {
  @ApiProperty() @IsString() @IsNotEmpty() name: string;
  @ApiProperty() @IsString() @IsNotEmpty() category: string;
  @ApiProperty() @IsNumber() basePrice: number;
  @ApiProperty() @IsNumber() taxRate: number;
  @ApiProperty() @IsNumber() tariffRate: number;
  @ApiProperty() @IsNumber() margin: number;
}

export class UpdatePriceDto {
  @ApiProperty({ required: false }) @IsString() name?: string;
  @ApiProperty({ required: false }) @IsString() category?: string;
  @ApiProperty({ required: false }) @IsNumber() basePrice?: number;
  @ApiProperty({ required: false }) @IsNumber() taxRate?: number;
  @ApiProperty({ required: false }) @IsNumber() tariffRate?: number;
  @ApiProperty({ required: false }) @IsNumber() margin?: number;
}
