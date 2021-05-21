import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { OnHoverModule } from './../../../shared/directives/on-hover/on-hover.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RemoveModule } from '../remove-dialog/remove.module';
import { EditServiceModule } from '../edit-service/edit-service.module';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule, MatCardModule, MatIconModule, MatButtonModule, RouterModule, OnHoverModule, RemoveModule, MatSnackBarModule,
    EditServiceModule
  ],
  exports: [CardComponent]
})
export class CardModule { }
