import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent {
  txtInput!: FormControl;

  constructor() {
    this.txtInput = new FormControl('Hola', Validators.required);
  }
}
