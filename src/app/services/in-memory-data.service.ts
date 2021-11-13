import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from '@app/models/todo';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [
      { id: 1, description: 'Clean the house', done: false, data: new Date(2012, 3, 1), editable: false },
      { id: 2, description: 'Hack NASA', done: false, data: new Date(2013, 7, 14), editable: false },
      { id: 3, description: 'Become President', done: true, data: new Date(2018, 11, 24), editable: false },
      { id: 4, description: 'Throw out the rubbish', done: false, data: new Date(2020, 7, 25), editable: false },
      { id: 5, description: 'Sleep', done: true, data: new Date(2021, 3, 19), editable: false },
    ];
    return { todos };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  }
}
