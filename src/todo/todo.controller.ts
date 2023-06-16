import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  getTodos(@Query() query: { id: string }) {
    if (!query.id) {
      return this.todoService.getTodos();
    }
    console.log(query);
    return this.todoService.getTodoById(query.id);
  }

  @Get('/:id')
  getTodoById(@Param('id') id: string) {
    return this.todoService.getTodoById(id);
  }

  @Post()
  postTodo(@Body('title') title: string, @Body('subtitle') subtitle: string) {
    return this.todoService.addTodo(title, subtitle);
  }

  @Delete('/:id')
  deleteTodoById(@Param('id') id: string) {
    console.log(`id: ${id}`);
    return this.todoService.removeTodoById(id);
  }
}
