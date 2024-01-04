import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// NGrX
import { StoreModule } from '@ngrx/store';
import { todosReducer } from './todos/todo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { SharedModule } from './shared/shared.module';
import { environment } from 'src/environments/environment.development';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    SharedModule,
    StoreModule.forRoot({todos: todosReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
