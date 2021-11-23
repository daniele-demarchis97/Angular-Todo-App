import { Injectable } from '@angular/core';
import { Todo } from '@app/models/todo';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LogService } from '@app/services/log.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todosUrl = 'api/todos';  // URL to web api

  constructor(private http: HttpClient, private logService: LogService) { }

  // GET todos from the server
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl)
    .pipe(
      tap((data) => this.logService.log(`getTodos Eseguito ${data}`)),
      catchError(this.handleError)
      );
  }

  // GET todo by id
  getTodo(id: number): Observable<Todo> {
    const url = `${this.todosUrl}/${id}`;
    return this.http.get<Todo>(url)
    .pipe(
      tap((data) => this.logService.log(`getTodo Eseguito ${data}`)),
      catchError(this.handleError)
    );

  }


  // Handle Http operation that failed.
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };


}
