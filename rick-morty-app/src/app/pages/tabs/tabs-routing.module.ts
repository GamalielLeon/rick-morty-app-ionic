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
        loadChildren: () => import('src/app/pages/characters/characters.module').then(m => m.CharactersPageModule)
      },
      {
        path: PROFILE,
        loadChildren: () => import('src/app/pages/profile/profile.module').then(m => m.ProfilePageModule)
      },
      { path: '**', redirectTo: PROFILE, pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
