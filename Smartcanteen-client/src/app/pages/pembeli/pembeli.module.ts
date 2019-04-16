import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PembeliPage } from './pembeli.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: PembeliPage,
    children: [
      {
        path: 'tab1a',
        loadChildren: '../tabs-a/tab1a/tab1a.module#Tab1aPageModule'
      },
      {
        path: 'tab2a',
        loadChildren: '../tabs-a/tab2a/tab2a.module#Tab2aPageModule'
      },
      {
        path: 'tab3a',
        loadChildren: '../tabs-a/tab3a/tab3a.module#Tab3aPageModule'
      },
    ],
  },
  {
    path: '',
    redirectTo: 'tabs/tab1a',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PembeliPage]
})
export class PembeliPageModule { }
