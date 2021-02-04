import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DETAILS } from 'src/app/constants/paths';
import { CharactersPage } from './characters.page';

const routes: Routes = [
  {
    path: '',
    component: CharactersPage
  },
  {
    path: `${DETAILS}/:id`,
    loadChildren: () => import('src/app/pages/details/details.module').then(m => m.DetailsPageModule)
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersPageRoutingModule {}
