import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './modules/todo/services/in-memory-data.service';

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
    FormsModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
