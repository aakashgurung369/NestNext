import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { PrismaService } from 'src/prisma.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: PrismaService) {}

  @Post()
  async addTask(@Body() taskBody: TaskDto) {
    await this.taskService.task.create({
      data: taskBody,
    });
  }

  @Get()
  async getTasks() {
    return await this.taskService.task.findMany();
  }

  @Get(':taskName')
  async searchTask(@Param('taskName') taskName: string) {
    return await this.taskService.task.findFirst({
      where: {
        taskName,
      },
    });
  }

  @Patch(':id')
  async updateTask(
    @Param('id', ParseIntPipe) id: number,
    @Body() task: TaskDto,
  ) {
    return await this.taskService.task.update({
      where: {
        id: id,
      },
      data: {
        taskName: task.taskName,
        taskStatus: task.taskStatus,
      },
    });
  }

  @Delete(':id')
  async deleteTask(@Param('id', ParseIntPipe) id: number) {
    return await this.taskService.task.delete({
      where: {
        id: id,
      },
    });
  }
}
