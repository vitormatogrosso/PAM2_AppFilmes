import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmeshomemAranhaPage } from './filmeshomem-aranha.page';

const routes: Routes = [
  {
    path: '',
    component: FilmeshomemAranhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmeshomemAranhaPageRoutingModule {}
