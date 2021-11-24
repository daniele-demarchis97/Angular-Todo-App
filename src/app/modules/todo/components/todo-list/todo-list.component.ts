import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '@app/models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];


  @Input() filter!: string;

  @Output() editTodo = new EventEmitter<Todo>();

  @Output() saveTodo = new EventEmitter<Todo>()

  @Input() removeTodosOut!: () => void;

  constructor(private todoService : TodoService) { }

  ngOnInit(): void {
    this.getTodos();
   }

   getTodos(): void {      //service
    this.todoService.getTodos()
        .subscribe(todos => this.todos = todos);
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

  delete(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    this.todoService.deleteTodo(todo.id).subscribe();
  }

}
