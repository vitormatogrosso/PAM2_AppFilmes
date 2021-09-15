import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmesironHeartsPageRoutingModule } from './filmesiron-hearts-routing.module';

import { FilmesironHeartsPage } from './filmesiron-hearts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmesironHeartsPageRoutingModule
  ],
  declarations: [FilmesironHeartsPage]
})
export class FilmesironHeartsPageModule {}
