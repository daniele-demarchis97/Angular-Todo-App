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
  idCounter: number = 6;
  filter!: string;
  editedTodo!: string;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.editedTodo = '';
    //TodoService
    this.getTodos();
  }

  //TodoService
  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  add(newItem: string): void {
    if (newItem.trim().length === 0) {
      return;
    }

    this.todoService.addTodo( {description: newItem} as Todo)
      .subscribe(todo => {
        this.todos.push(todo);
      });


  }

  // output from todo-nav component
  outputFiltered(outFilter: string): void {
    this.filter = outFilter;
  }

  editTodo(todo: Todo): void {
    this.editedTodo = todo.description;
    todo.editable = true;
  }

  saveTodo(todo: Todo): void {
    if (todo.description.trim().length === 0) {
      todo.description = this.editedTodo;
    }
    todo.editable = false;
  }

  removeTodos = (): void => {
    this.todos = this.todos.filter((todo) => !todo.done);
  };
}
