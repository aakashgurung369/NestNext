import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  create(createTaskDto: any) {
    return 'This action adds a new task';
  }

  findAll() {
    return `This action returns all task`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: any) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
