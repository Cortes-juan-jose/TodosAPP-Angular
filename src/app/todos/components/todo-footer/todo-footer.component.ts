import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actionsFiltros from 'src/app/filtro/filtro.actions';
import * as actionsTareas from '../../todo.actions';

@Component({
  selector: 'todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  filtroActivado!: string;
  filtros!: actionsFiltros.filtrosValidos[];

  tareasPendientes: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.filtros = ['todas', 'pendientes', 'completadas'];

    this.store.subscribe({
      next: (state) => {
        this.filtroActivado = state.filtro;
        this.tareasPendientes = state.tareas.filter(
          (tarea) => !tarea.completado
        ).length;
      },
      error: (err) => console.log(err),
      complete: () => console.log('Completado'),
    });
    this.tareasPendientes;
  }

  establecerFiltro(filtro: actionsFiltros.filtrosValidos) {
    this.store.dispatch(actionsFiltros.establecerFiltro({ filtro }));
  }

  limpiarTareasCompletadas() {
    this.store.dispatch(actionsTareas.eliminarTareasCompletadas());
  }
}
