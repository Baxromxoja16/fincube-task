import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { FilmsComponent } from './home/pages/films/films.component';
import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './home/pages/people/people.component';
import { PlanetsComponent } from './home/pages/planets/planets.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { ShipsComponent } from './home/pages/ships/ships.component';
import { TansportComponent } from './home/pages/tansport/tansport.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full',
  },
  { path: 'auth', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'planets', component: PlanetsComponent },
  { path: 'ships', component: ShipsComponent },
  { path: 'transport', component: TansportComponent },
  { path: '**', pathMatch: 'full',
  component: PagenotfoundComponent },
];
