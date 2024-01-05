import { createReducer, on } from "@ngrx/store";
import * as actions from "./filtro.actions";
import { filtrosValidos } from "./filtro.constantes";

export const filtroInicial: string = filtrosValidos.TODAS;

export const filtroReducer = createReducer(
    filtroInicial,
    on(actions.establecerFiltro, (state, {filtro}) => {

        switch(filtro){
            case filtrosValidos.TODAS: return filtrosValidos.TODAS;
            case filtrosValidos.COMPLETADAS: return filtrosValidos.COMPLETADAS;
            case filtrosValidos.PENDIENTES: return filtrosValidos.PENDIENTES;
            default: return state;
        }
    }),
)