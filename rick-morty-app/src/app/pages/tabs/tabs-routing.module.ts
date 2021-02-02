import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PROFILE, CHARACTERS, DETAILS } from 'src/app/constants/paths';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: CHARACTERS,
        loadChildren: '../characters/characters.module#CharactersPageModule'
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
