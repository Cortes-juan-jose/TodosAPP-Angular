import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.model';
import { filtrosValidos } from 'src/app/filtro/filtro.constantes';


@Pipe({
  name: 'filtroTarea'
})
export class FiltroPipe implements PipeTransform {

  transform(tareas: Todo[], filtro: string): Todo[] {

    switch(filtro) {
      case filtrosValidos.TODAS: return tareas;
      case filtrosValidos.PENDIENTES: return tareas.filter(tarea => !tarea.completado);
      case filtrosValidos.COMPLETADAS: return tareas.filter(tarea => tarea.completado);
      default: return tareas;
    }
  }

}
