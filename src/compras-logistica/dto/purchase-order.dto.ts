import { z } from 'zod';

export const OriginStatusEnum = z.enum([
  'pending_supplier',
  'left_origin',
  'in_customs',
  'arrived_local_port',
  'received_at_warehouse',
]);

export const InternalStatusEnum = z.enum([
  'pending',
  'printed',
  'packaged',
  'quality_check',
  'completed',
]);

export const ExternalShippingStatusEnum = z.enum([
  'pending_pickup',
  'in_transit',
  'delivered',
  'exception',
  'not_applicable',
]);

export const OverallStatusEnum = z.enum([
  'pending',
  'in_production',
  'in_transit',
  'delivered',
  'completed',
  'cancelled',
]);

export const PurchaseOrderSchema = z.object({
  productName: z.string().min(1),
  quantity: z.number().int().positive(),
  unitPrice: z.number().nonnegative(),
  origin: z.string().min(1),
  destination: z.string().optional(),
  originStatus: OriginStatusEnum,
  internalStatus: InternalStatusEnum,
  externalShippingStatus: ExternalShippingStatusEnum,
  overallStatus: OverallStatusEnum,
  notes: z.string().optional(),
});

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsNumber, IsOptional, IsEnum, Min, MinLength } from 'class-validator';

export class PurchaseOrderDto {
  @ApiProperty()
  @IsString()
  @MinLength(1)
  productName: string;

  @ApiProperty()
  @IsInt()
  @Min(1)
  quantity: number;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  unitPrice: number;

  @ApiProperty()
  @IsString()
  @MinLength(1)
  origin: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  destination?: string;

  @ApiProperty({ enum: OriginStatusEnum.options })
  @IsEnum(OriginStatusEnum.options)
  originStatus: typeof OriginStatusEnum.Enum;

  @ApiProperty({ enum: InternalStatusEnum.options })
  @IsEnum(InternalStatusEnum.options)
  internalStatus: typeof InternalStatusEnum.Enum;

  @ApiProperty({ enum: ExternalShippingStatusEnum.options })
  @IsEnum(ExternalShippingStatusEnum.options)
  externalShippingStatus: typeof ExternalShippingStatusEnum.Enum;

  @ApiProperty({ enum: OverallStatusEnum.options })
  @IsEnum(OverallStatusEnum.options)
  overallStatus: typeof OverallStatusEnum.Enum;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  notes?: string;
}
