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
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'people', component: PeopleComponent, data: { animation: 'peoplePage' } },
      { path: 'films', component: FilmsComponent, data: { animation: 'filmsPage' } },
      { path: 'planets', component: PlanetsComponent, data: { animation: 'planetsPage' } },
      { path: 'ships', component: ShipsComponent, data: { animation: 'shipsPage' } },
      { path: 'transport', component: TansportComponent, data: { animation: 'transportPage' } },
    ]
  },
  {
    path: '**', pathMatch: 'full',
    component: PagenotfoundComponent
  },
];
