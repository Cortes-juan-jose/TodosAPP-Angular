import { createReducer, on } from "@ngrx/store";
import { addTarea } from "./todo.actions";
import { Todo } from "./models/todo.model";

export const stateInitial: Todo[] = [new Todo('Tengo que ir a comprar')];

export const todosReducer = createReducer(stateInitial,
    on(addTarea, (state, {texto}) => [...state, new Todo(texto)])
)