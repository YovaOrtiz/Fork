import { ApiProperty } from '@nestjs/swagger';

export class CreateAreaDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  progress: number;

  @ApiProperty()
  responsible: string;

  @ApiProperty()
  dueDate: string;

  @ApiProperty()
  estimatedHours: number;

  @ApiProperty()
  hoursWorked: number;
}
