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

  constructor() { }

  ngOnInit(): void {
    this.idCounter = 6;
    this.newTodo = '';
    this.dateToday = Date.now();
    this.todos = TODOS;
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


  outputFiltered(outFilter:string) {
    this.filter = outFilter;
  }


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

}
