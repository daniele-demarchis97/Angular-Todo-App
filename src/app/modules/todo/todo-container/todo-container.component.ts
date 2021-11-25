import { Component, OnInit } from '@angular/core';
import { Todo } from '@app/models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css'],
})
export class TodoContainerComponent implements OnInit {
  // TodoService
  todos: Todo[] = [];
  filter!: string;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  addTodo(newItem: string): void {
    this.todoService.add(newItem);
  }

  deleteTodo(todo: Todo): void {
    this.todoService.delete(todo);
  }

  deleteAllTodo(): void {
    this.todoService.deleteAll();
  }

  editTodo(todo: Todo): void {
    this.todoService.edit(todo);
  }

  saveTodo(todo: Todo): void {
    this.todoService.save(todo);
  }

  // output from todo-nav component
  outputFiltered(outFilter: string): void {
    this.filter = outFilter;
  }
}
