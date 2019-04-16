import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PenjualPage } from './penjual.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: PenjualPage,
    children: [
      {
        path: 'tab1b',
        loadChildren: '../tabs-b/tab1b/tab1b.module#Tab1bPageModule'
      },
      {
        path: 'tab2b',
        loadChildren: '../tabs-b/tab2b/tab2b.module#Tab2bPageModule'
      },
      {
        path: 'tab3b',
        loadChildren: '../tabs-b/tab3b/tab3b.module#Tab3bPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tab1b',
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
  declarations: [PenjualPage]
})
export class PenjualPageModule { }
