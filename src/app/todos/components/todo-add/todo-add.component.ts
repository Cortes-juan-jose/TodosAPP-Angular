import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { crearTarea } from '../../todo.actions';

@Component({
  selector: 'todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent {
  txtInput!: FormControl;

  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('', Validators.required);
  }

  crearTarea() {
    if (this.txtInput.valid) {
      this.store.dispatch(crearTarea({ texto: this.txtInput.value }));
    }
    this.txtInput.reset();
  }
}
