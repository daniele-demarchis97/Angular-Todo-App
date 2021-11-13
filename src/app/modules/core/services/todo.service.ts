import { Injectable } from '@angular/core';
import { Todo } from '@app/shared/shared/models/todo';
import { TODOS } from '@app/shared/shared/models/mock-todos';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todosUrl = 'api/todos';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl)
  }
}
