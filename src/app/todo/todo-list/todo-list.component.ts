import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '@app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() filteredTodo!: () => Todo[];

  @Input() editedTodo!: (todo: Todo) => void;

  @Input() savedTodo!: (todo: Todo) => void;

  constructor() { }

  ngOnInit() { }

}
