import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-nav',
  templateUrl: './todo-nav.component.html',
  styleUrls: ['./todo-nav.component.css']
})
export class TodoNavComponent implements OnInit {

  @Input() filter: string = 'all';

  @Output() filtered = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }


  filt(f:string) {
    this.filtered.emit(f);
  }

}
