import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full',
  },
  { path: 'auth', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full',
  component: PagenotfoundComponent },
];
