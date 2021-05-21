import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: 'service-list', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'service-list',
        loadChildren: () => import('./../service/list/list.module').then(m => m.ListModule),
      },
      {
        path: 'service-add',
        loadChildren: () => import('./../service/add/add.module').then(m => m.AddModule),
      },
      {
        path: 'resource-add',
        loadChildren: () => import('./../resource/add/add.module').then(m => m.AddModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
