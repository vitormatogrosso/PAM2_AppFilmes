import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'filmeshomem-aranha',
    loadChildren: () => import('./filmeshomem-aranha/filmeshomem-aranha.module').then( m => m.FilmeshomemAranhaPageModule)
  },
  {
    path: 'filmesdemon-slayer',
    loadChildren: () => import('./filmesdemon-slayer/filmesdemon-slayer.module').then( m => m.FilmesdemonSlayerPageModule)
  },
  {
    path: 'filmesiron-hearts',
    loadChildren: () => import('./filmesiron-hearts/filmesiron-hearts.module').then( m => m.FilmesironHeartsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
