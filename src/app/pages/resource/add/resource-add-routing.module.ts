import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add.component';

const routes: Routes = [
  {
    path: '',
    component: AddComponent,
    data: { title: 'Bugya Kingdom - Add Resource' }

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceAddRoutingModule { }
