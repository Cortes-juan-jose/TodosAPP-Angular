import { createAction, props } from "@ngrx/store";

export const addTarea = createAction('[TODO] Crear Tarea', props<{
    texto: string
}>())