import { Routes } from '@angular/router';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { authGuard, authGuardChild } from './auth/guards/auth.guard';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full',
  },
  {
    path: 'home',
    redirectTo: 'home/people',
    pathMatch: 'full',
  },
  { path: 'auth', loadComponent: () => import('./auth/login.component').then(mod => mod.LoginComponent), title: "Auth" },
  {
    path: 'home',canActivateChild: [authGuardChild], canActivate:[authGuard], loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent), title: "Home", children: [
      { path: 'people',  loadComponent: () => import('./home/pages/people/people.component').then(mod => mod.PeopleComponent), data: { animation: 'peoplePage' }, title: "People" },
      { path: 'films',  loadComponent: () => import('./home/pages/films/films.component').then(mod => mod.FilmsComponent), data: { animation: 'filmsPage' }, title: "Films" },
      { path: 'planets', loadComponent: () => import('./home/pages/planets/planets.component').then(mod => mod.PlanetsComponent), data: { animation: 'planetsPage' }, title: "Planets" },
      { path: 'ships', loadComponent: () => import('./home/pages/ships/ships.component').then(mod => mod.ShipsComponent), data: { animation: 'shipsPage' }, title: "Ships" },
      { path: 'transport', loadComponent: () => import('./home/pages/tansport/tansport.component').then(mod => mod.TansportComponent), data: { animation: 'transportPage' }, title: "Transport" },
      { path: 'detail', loadComponent: () => import('./shared/components/details/details.component').then(mod => mod.DetailsComponent), data: { animation: 'detailPage' }, title: "Details" },
    ]
  },
  {
    path: '**', pathMatch: 'full',
    component: PagenotfoundComponent
  },
];
