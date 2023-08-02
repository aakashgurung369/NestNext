import { IsBoolean, IsString } from 'class-validator';

export class TaskDto {
  @IsString()
  taskName: string;

  @IsBoolean()
  taskStatus: boolean;
}
