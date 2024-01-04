import { ActionReducerMap } from "@ngrx/store";

import { Todo } from "./todos/models/todo.model";
import { tareasReducer } from "./todos/todo.reducer";
import { filtroReducer } from "./filtro/filtro.reducer";

export interface AppState {
    tareas: Todo[],
    filtro: string
}

export const appReducers: ActionReducerMap<AppState> = {
    tareas: tareasReducer,
    filtro: filtroReducer
}