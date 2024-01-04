import { createAction, props } from "@ngrx/store";

export const crearTarea = createAction('[TODO] Crear Tarea', props<{
    texto: string
}>());

export const marcarDesmarcarTarea= createAction('[TODO] Marcar/Desmarcar Tarea', props<{
    id: number,
}>());

export const eliminarTarea= createAction('[TODO] Eliminar Tarea', props<{
    id: number,
}>());

export const editarTarea = createAction('[TODO] Editar Tarea', props<{
    id: number,
    texto: string,
}>());