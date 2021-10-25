import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.css']
})
export class TodoSearchComponent implements OnInit {

  @Output() newTaskOutput = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  submitNewTaskOutput(value: string) {
    this.newTaskOutput.emit(value);
  }

}
