import { ActivatedRouteSnapshot, CanActivateFn, CanActivateChild, GuardResult, MaybeAsync, RouterStateSnapshot, CanActivateChildFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService =  inject(AuthService)
  if(authService.isLoggedIn()) return true;
  return false;
};
export const authGuardChild: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService =  inject(AuthService)
  if(authService.isLoggedIn()) return true;
  return false;
};
