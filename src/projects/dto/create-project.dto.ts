import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsString, IsDateString, IsNumber, ValidateNested, IsArray, IsOptional } from 'class-validator';
import { CreateAreaDto } from './create-area.dto';

export enum ProjectPriority {
  low = 'low',
  medium = 'medium',
  high = 'high',
  critical = 'critical',
}

export enum ProjectStatus {
  planning = 'planning',
  active = 'active',
  on_hold = 'on_hold',
  completed = 'completed',
  cancelled = 'cancelled',
}

export class CreateProjectDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  client: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsDateString()
  startDate: string;

  @ApiProperty()
  @IsDateString()
  expectedEndDate: string;

  @ApiProperty({ enum: ProjectPriority })
  @IsEnum(ProjectPriority)
  priority: ProjectPriority;

  @ApiProperty({ enum: ProjectStatus })
  @IsEnum(ProjectStatus)
  status: ProjectStatus;

  @ApiProperty()
  @IsNumber()
  budget: number;

  @ApiProperty()
  @IsNumber()
  profitability: number;

  @ApiProperty()
  @IsNumber()
  internalCost: number;

  @ApiProperty()
  @IsNumber()
  overallProgress: number;

  @ApiProperty()
  @IsString()
  currentStage: string;

  @ApiProperty({ type: [CreateAreaDto], required: false })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAreaDto)
  areas?: CreateAreaDto[];

  @ApiProperty()
  @IsString()
  createdBy: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  createdAt?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  updatedAt?: string;
}
