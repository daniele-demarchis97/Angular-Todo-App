import { Injectable } from '@angular/core';
import { Todo } from '@app/shared/shared/models/todo';
import { TODOS } from '@app/shared/shared/models/mock-todos';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(): Observable<Todo[]> {
    const todos = of(TODOS);
    return todos;
  }
}
