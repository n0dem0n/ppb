import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pembeli', pathMatch: 'full' },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'pembeli', loadChildren: './pages/pembeli/pembeli.module#PembeliPageModule' },
  { path: 'login-penjual', loadChildren: './pages/login-penjual/login-penjual.module#LoginPenjualPageModule' },
  { path: 'login-admin', loadChildren: './pages/login-admin/login-admin.module#LoginAdminPageModule' },
  { path: 'penjual', loadChildren: './pages/penjual/penjual.module#PenjualPageModule' },
  {
    path: 'makanan/:userid', 
    loadChildren: './pages/makanan/makanan.module#MakananPageModule' 
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
