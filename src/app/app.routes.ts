import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full',
  },
  { path: 'auth', component: LoginComponent },
  { path: '**', pathMatch: 'full',
  component: PagenotfoundComponent },
];
