import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { TodoNavComponent } from './layout/todo-nav/todo-nav.component';
import { TodoContainerComponent } from './modules/todo/todo-container/todo-container.component';
import { TodoListComponent } from './modules/todo/components/todo-list/todo-list.component';
import { TodoSearchComponent } from './modules/todo/components/todo-addbar/todo-search.component';
import { CardComponent } from "@app/shared/components/card/card.component";

@NgModule({
  declarations: [
    AppComponent,
    TodoNavComponent,
    TodoContainerComponent,
    TodoListComponent,
    TodoSearchComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
