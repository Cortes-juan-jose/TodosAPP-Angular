import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ReactiveFormsModule,
    FooterComponent,
  ]
})
export class SharedModule { }
