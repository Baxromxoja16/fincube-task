import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { FilmsComponent } from './home/pages/films/films.component';
import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './home/pages/people/people.component';
import { PlanetsComponent } from './home/pages/planets/planets.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { ShipsComponent } from './home/pages/ships/ships.component';
import { TansportComponent } from './home/pages/tansport/tansport.component';
import { DetailsComponent } from './shared/components/details/details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full',
  },
  { path: 'auth', loadComponent: () => import('./auth/login.component').then(mod => mod.LoginComponent) },
  {
    path: 'home', loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent), children: [
      { path: 'people',  loadComponent: () => import('./home/pages/people/people.component').then(mod => mod.PeopleComponent), data: { animation: 'peoplePage' } },
      { path: 'films',  loadComponent: () => import('./home/pages/films/films.component').then(mod => mod.FilmsComponent), data: { animation: 'filmsPage' } },
      { path: 'planets', loadComponent: () => import('./home/pages/planets/planets.component').then(mod => mod.PlanetsComponent), data: { animation: 'planetsPage' } },
      { path: 'ships', loadComponent: () => import('./home/pages/ships/ships.component').then(mod => mod.ShipsComponent), data: { animation: 'shipsPage' } },
      { path: 'transport', loadComponent: () => import('./home/pages/tansport/tansport.component').then(mod => mod.TansportComponent), data: { animation: 'transportPage' } },
      { path: 'detail', loadComponent: () => import('./shared/components/details/details.component').then(mod => mod.DetailsComponent), data: { animation: 'detailPage' } },
    ]
  },
  {
    path: '**', pathMatch: 'full',
    component: PagenotfoundComponent
  },
];
