import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import { marcarDesmarcarTodasTareas } from '../../todo.actions';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{

  listaTareas!: Todo[];
  completadas!: boolean;

  constructor(private store: Store<AppState>){}

  ngOnInit () : void {
    this.store.select('todos').subscribe({
      next: todos => this.listaTareas = todos,
      error: err => console.log(err),
      complete: () => console.log('Completado'),
    });

    this.completadas = false;
  }

  completarTodasTareas () {
    this.completadas = !this.completadas;
    this.store.dispatch ( marcarDesmarcarTodasTareas({completado: this.completadas}) );
  }

}
