import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { BaseService } from '../../shared/services/base.service';

export interface IPlanets {}
export interface IPlanet {}

@Injectable({
  providedIn: 'root'
})
export class PlanetService extends BaseService<IPlanets> {
  planetsSig = this.datasSig;

  planetSig = this.dataSig;

  planet$ = this.data$;

  constructor(http: HttpClient) {
    super(http, environment.apiUrl + 'planets')
  }
}
