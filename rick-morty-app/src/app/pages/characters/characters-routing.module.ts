import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersPage } from './characters.page';

const routes: Routes = [
  {
    path: '',
    component: CharactersPage
  },
  {
    path: 'details/:id',
    loadChildren: '../details/details.module#DetailsPageModule'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersPageRoutingModule {}
