import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from 'src/app/filtro/filtro.actions';

@Component({
  selector: 'todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit{

  filtroActivado!: string;
  filtros!: actions.filtrosValidos[];
  tareasPendientes!: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {

    this.filtros = ['todas', 'pendientes', 'completadas'];

    this.store.select('filtro').subscribe({
      next: filtro => this.filtroActivado = filtro,
      error: err => console.log(err),
      complete: () => console.log('Completado'),
    })
    this.tareasPendientes;
  }

  establecerFiltro(filtro: actions.filtrosValidos){

    this.store.dispatch(actions.establecerFiltro({filtro}));

  }

}
