import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../../todo.actions';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() tarea!: Todo;
  @ViewChild('inputFisico') txtInputFisico!: ElementRef;

  checkTarea!: FormControl;
  txtInput!: FormControl;

  editando!: boolean;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.checkTarea = new FormControl(this.tarea.completado);
    this.txtInput = new FormControl(this.tarea.texto, Validators.required);
    this.editando = false;

    this.checkTarea.valueChanges.subscribe({
      next: (val) => {
        this.store.dispatch(
          actions.marcarDesmarcarTarea({ id: this.tarea.id })
        );
      },
      error: (err) => console.log(err),
      complete: () => console.log('completado'),
    });
  }

  editar() {
    this.editando = true;
    this.txtInput.setValue(this.tarea.texto);
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 10);
  }

  modificarTarea() {
    this.editando = false;

    if (this.txtInput.invalid) return;
    if (this.txtInput.value === this.tarea.texto) return;

    this.store.dispatch(
      actions.editarTarea({ id: this.tarea.id, texto: this.txtInput.value })
    );
  }
}
