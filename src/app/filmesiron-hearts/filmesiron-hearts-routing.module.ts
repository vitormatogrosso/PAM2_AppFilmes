import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmesironHeartsPage } from './filmesiron-hearts.page';

const routes: Routes = [
  {
    path: '',
    component: FilmesironHeartsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmesironHeartsPageRoutingModule {}
