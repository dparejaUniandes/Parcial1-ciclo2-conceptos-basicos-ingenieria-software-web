import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeListarComponent } from './cafe-lista/coffee-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CafeListarComponent],
  exports: [CafeListarComponent]
})
export class CafeModule { }
