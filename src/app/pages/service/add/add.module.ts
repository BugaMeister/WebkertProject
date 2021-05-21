import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add.component';
import { ServiceAddRoutingModule } from './service-add-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ContainerModule } from './../../../shared/components/container/container.module';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule, ServiceAddRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule, ReactiveFormsModule,
    MatListModule,
    MatRadioModule,
    FormsModule,
    MatDatepickerModule,
    ContainerModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  exports: [AddComponent]
})
export class AddModule { }
