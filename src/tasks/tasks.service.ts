import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from '../services/prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  create(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.prisma.task.create({ data: createTaskDto });
  }

  findAll(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }

  findOne(id: number): Promise<Task | null> {
    return this.prisma.task.findUnique({ where: { id } });
  }

  update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    return this.prisma.task.update({ data: updateTaskDto, where: { id } });
  }

  remove(id: number): Promise<Task> {
    return this.prisma.task.delete({ where: { id } });
  }
}
