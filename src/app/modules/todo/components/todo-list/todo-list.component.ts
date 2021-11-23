import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '@app/models/todo';
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todo: Todo | undefined;

  @Input() filteredTodo!: () => Todo[];

  @Input() filter!: string;

  @Output() editTodo = new EventEmitter<Todo>();

  @Output() saveTodo = new EventEmitter<Todo>()

  @Output() removeTodo = new EventEmitter<Todo>()

  @Input() removeTodosOut!: () => void;

  constructor(private todoService: TodoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTodo();
   }

   getTodo(): void {      //service
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.todoService.getTodo(id)
        .subscribe(todo => this.todo = todo);
  }

}
