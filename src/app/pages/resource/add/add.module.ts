import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add.component';
import { ResourceAddRoutingModule } from './resource-add-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ListModule } from './list/list.module';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 

@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule, ResourceAddRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    FormsModule, MatFormFieldModule, ReactiveFormsModule,
    ContainerModule,
    MatProgressSpinnerModule,
    ListModule,
    MatSnackBarModule
  ],
  exports: [AddComponent]
})
export class AddModule { }
