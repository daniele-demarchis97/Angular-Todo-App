import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '@app/shared/shared/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() filteredTodo!: () => Todo[];

  @Input() filter!: string;

  @Output() editTodo = new EventEmitter<Todo>();

  @Output() saveTodo = new EventEmitter<Todo>()

  @Output() removeTodo = new EventEmitter<Todo>()

  @Input() removeTodosOut!: () => void;

  constructor() { }

  ngOnInit() { }

}
