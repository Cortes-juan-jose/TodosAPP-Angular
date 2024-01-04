import { createReducer, on } from '@ngrx/store';

import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const stateInitial: Todo[] = [
  new Todo('Tengo que ir a comprar'),
  new Todo('Lavar los platos'),
  new Todo('Fregar el suelo de la cocina'),
  new Todo('Recoger la mesa'),
];

export const todosReducer = createReducer(
  stateInitial,

  on(actions.crearTarea, (state, { texto }) => [new Todo(texto), ...state]),

  on(actions.marcarDesmarcarTarea, (state, { id }) => {
    return state.map((tarea: Todo) => {
      if (tarea.id === id) {
        return {
          ...tarea,
          completado: !tarea.completado,
        };
      } else {
        return { ...tarea };
      }
    });
  }),

  on(actions.editarTarea, (state, { id, texto }) => {
    return state.map((tarea: Todo) => {
      if (tarea.id === id) {
        return {
          ...tarea,
          texto: texto,
        };
      } else {
        return { ...tarea };
      }
    });
  }),

  on(actions.eliminarTarea, (state, { id }) => {
    return state.filter((tarea) => {
      return tarea.id !== id;
    });
  }),

  on(actions.marcarDesmarcarTodasTareas, (state, { completado }) => {
    return state.map((tarea) => {
      return {
        ...tarea,
        completado,
      };
    });
  })
);
