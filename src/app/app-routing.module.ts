import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoPageComponent } from './todos/components/todo-page/todo-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tareas',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'tareas',
    pathMatch: 'full'
  },
  {
    path: 'tareas',
    component: TodoPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
