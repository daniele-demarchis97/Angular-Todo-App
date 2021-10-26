import { Component, OnInit } from '@angular/core';
import { TODOS } from '@app/mock-todos';
import { Todo } from '@app/models/todo';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  todos!: Todo[];
  idCounter!: number;
  newTodo!: string;
  dateToday!: Date | number;
  filter!: string;
  editedTodo!: string;

  constructor() { }

  ngOnInit(): void {
    this.idCounter = 6;
    this.newTodo = '';
    this.dateToday = Date.now();
    this.todos = TODOS;
    this.editedTodo = '';
  }

  //newItem param is emitted from todo-nav component
  submitNewTask(newItem: string): void {

    if (newItem.trim().length === 0) {
      return;
    }

    this.todos.push({
      id: this.idCounter,
      description: newItem,
      done: false,
      data: this.dateToday,
      editable: false,
    });

    this.idCounter++;
  }

  // output from todo-nav component
  outputFiltered(outFilter: string): void {
    this.filter = outFilter;
  }

  //callback for todo-list component
  todosFiltered = (): Todo[] => {
    if (this.filter === 'all') {
      return this.todos;
    } else if (this.filter === 'active') {
      return this.todos.filter(todo => !todo.done);
    } else if (this.filter === 'completed') {
      return this.todos.filter(todo => todo.done);
    }

    return this.todos;
  }


  editTodo = (todo: Todo): void => {
    this.editedTodo = todo.description;
    todo.editable = true;
  }

  saveTodo = (todo: Todo): void => {
    if (todo.description.trim().length === 0) {
      todo.description = this.editedTodo;
    }

    todo.editable = false;
  }

  removeTodo = (todo: Todo): void => {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  removeTodos = (): void => {
    this.todos = this.todos.filter(todo => !todo.done);
  }
}
