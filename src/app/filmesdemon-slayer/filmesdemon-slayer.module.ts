import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmesdemonSlayerPageRoutingModule } from './filmesdemon-slayer-routing.module';

import { FilmesdemonSlayerPage } from './filmesdemon-slayer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmesdemonSlayerPageRoutingModule
  ],
  declarations: [FilmesdemonSlayerPage]
})
export class FilmesdemonSlayerPageModule {}
