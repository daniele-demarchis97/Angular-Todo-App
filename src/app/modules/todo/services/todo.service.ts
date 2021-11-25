import { Injectable } from '@angular/core';
import { Todo } from '@app/models/todo';
import { TODOS } from '@app/models/mock-todos';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  private todos: Todo[] = TODOS;
  idCounter: number = 6;
  editedTodo: string = '';

  constructor() {}

  // GET todos
  getTodos(): Todo[] {
    return this.todos;
  }

  // GET todo by id
  getTodo(id: number): Todo {
    return this.todos.find(todo => todo.id === id) as Todo;
  }

  // ADD new todo
  add(newItem: string): void {
    if(newItem.trim().length === 0){
      return;
    }
    this.todos.push({
      id: this.idCounter,
      description: newItem,
      done: false,
      data: Date.now(),
      editable: false
    });
    this.idCounter++;
  }

  // DELETE todo
  delete(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  // DELETE todos
  deleteAll(): void {
    this.todos = this.todos.filter(todo => !todo.done);
  }

  // EDIT todo
  edit(todo: Todo): void {
      this.editedTodo = todo.description;
      todo.editable = true;
  }

  // SAVE todo
  save(todo: Todo): void {
    if(todo.description.trim().length === 0) {
      todo.description = this.editedTodo;
    }
    todo.editable = false;
  }

}
