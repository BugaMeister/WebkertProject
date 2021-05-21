import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveComponent } from './remove.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [RemoveComponent],
  imports: [
    CommonModule, MatButtonModule, MatDialogModule
  ],
  exports: [RemoveComponent]
})
export class RemoveModule { }
