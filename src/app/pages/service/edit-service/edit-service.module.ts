import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditServiceComponent } from './edit-service.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [EditServiceComponent],
  imports: [
    CommonModule, MatButtonModule, MatDialogModule, MatSelectModule, ContainerModule,
    FormsModule, MatInputModule, ReactiveFormsModule, MatFormFieldModule, MatDatepickerModule, MatRadioModule, MatIconModule,
    MatCardModule
  ],
  exports: [EditServiceComponent]
})
export class EditServiceModule { }
