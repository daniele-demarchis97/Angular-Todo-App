import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './modules/core/components/todo-list/todo-list.component';
import { TodoNavComponent } from './shared/components/todo-nav/todo-nav.component';
import { TodoSearchComponent } from './modules/core/components/todo-search/todo-search.component';
import { TodoContainerComponent } from './modules/core/container/todo-container/todo-container.component';

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
