import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { REGISTER, PROFILE, CHARACTERS } from 'src/app/constants/paths';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: REGISTER,  // Aquí debería ir CHARACTERS
        loadChildren: '../register/register.module#RegisterPageModule'
      },
      {
        path: PROFILE,
        loadChildren: '../profile/profile.module#ProfilePageModule'
      },
      {
        path: '**', redirectTo: PROFILE, pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
