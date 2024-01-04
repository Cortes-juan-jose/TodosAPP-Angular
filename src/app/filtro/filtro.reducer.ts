import { createReducer, on } from "@ngrx/store";
import * as actions from "./filtro.actions";
import { filtrosValidos } from "./filtro.constantes";

export const filtroInicial: string = filtrosValidos.TODAS;

export const filtroReducer = createReducer(
    filtroInicial,
    on(actions.establecerFiltro, (state, {filtro}) => {
        return state;
    }),
)