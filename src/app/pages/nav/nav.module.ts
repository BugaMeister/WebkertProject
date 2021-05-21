import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OnHoverModule } from './../../shared/directives/on-hover/on-hover.module';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule, RouterModule,
    FlexLayoutModule,
    OnHoverModule,
  ],
  exports: [NavComponent]
})
export class NavModule { }
