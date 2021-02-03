import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LOGIN, TABS, REGISTER } from './constants/paths';

const routes: Routes = [
  {
    path: LOGIN,
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: REGISTER,
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: TABS,
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  { path: '**', redirectTo: LOGIN, pathMatch: 'full' },
  {
    path: 'details',
    loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
