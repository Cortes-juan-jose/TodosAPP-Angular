import { createAction, props } from "@ngrx/store";

export type filtrosValidos = 'todas' | 'completadas' | 'pendientes';

export const establecerFiltro = createAction('[Filtro] Establecer Filtro', props<{
    filtro: filtrosValidos
}>());
