import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { PrismaService } from '../services/prisma.service';

@Module({
  imports: [PrismaService],
  controllers: [TasksController],
  providers: [TasksService, PrismaService],
  exports: [TasksService, PrismaService],
})
export class TasksModule {}
