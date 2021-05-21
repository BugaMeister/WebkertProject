import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ServiceListRoutingModule } from './service-list-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { CardModule } from '../card/card.module';
import { SearchModule } from '../search/search.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule, ServiceListRoutingModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    FormsModule, MatFormFieldModule, ReactiveFormsModule,
    ContainerModule,
    MatProgressSpinnerModule,
    CardModule,
    SearchModule,
    MatButtonModule
  ],
  exports: [ListComponent]
})
export class ListModule { }
