import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class EstimateDto {
  @ApiProperty() @IsString() @IsNotEmpty() productType: string;
  @ApiProperty() @IsNumber() quantity: number;
  @ApiProperty() @IsString() @IsNotEmpty() designComplexity: string;
  @ApiProperty({ required: false }) @IsString() @IsOptional() notes?: string;
}
