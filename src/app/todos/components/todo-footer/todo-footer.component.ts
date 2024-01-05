import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { establecerFiltro, filtrosValidos } from 'src/app/filtro/filtro.actions';

@Component({
  selector: 'todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit{

  tareasPendientes!: number;
  filtroActivado!: string;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('filtro').subscribe({
      next: filtro => this.filtroActivado = filtro,
      error: err => console.log(err),
      complete: () => console.log('Completado'),
    })
    this.tareasPendientes;
  }

  establecerFiltro(filtro: filtrosValidos){

    this.store.dispatch(establecerFiltro({filtro}));

  }

}
