import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoNavComponent } from './todo/todo-nav/todo-nav.component';
import { TodoSearchComponent } from './todo/todo-search/todo-search.component';
import { TodoContainerComponent } from './todo/todo-container/todo-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoNavComponent,
    TodoSearchComponent,
    TodoContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
