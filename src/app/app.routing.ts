import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ArtComponent } from './art/art.component';
import { FilmComponent } from './film/film.component';
import { MusicComponent } from './music/music.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'art',
    component: ArtComponent
  },
  {
    path: 'film',
    component: FilmComponent
  },
  {
    path: 'music',
    component: MusicComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
