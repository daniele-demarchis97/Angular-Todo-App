import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '@app/models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos!: Todo[];
  @Input() filter!: string;
  @Output() deleteTodo = new EventEmitter<Todo>();
  @Output() deleteAllTodo = new EventEmitter();
  @Output() editTodo = new EventEmitter<Todo>();
  @Output() saveTodo = new EventEmitter<Todo>()

  constructor(private todoService : TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
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
