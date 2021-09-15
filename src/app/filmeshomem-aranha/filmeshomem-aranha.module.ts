import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmeshomemAranhaPageRoutingModule } from './filmeshomem-aranha-routing.module';

import { FilmeshomemAranhaPage } from './filmeshomem-aranha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmeshomemAranhaPageRoutingModule
  ],
  declarations: [FilmeshomemAranhaPage]
})
export class FilmeshomemAranhaPageModule {}
