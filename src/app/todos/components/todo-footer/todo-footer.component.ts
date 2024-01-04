import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit{

  tareasPendientes!: number;

  constructor() {}

  ngOnInit(): void {
    this.tareasPendientes = 10;
  }

}
