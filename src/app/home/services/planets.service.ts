import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';

export interface IPlanets {}
export interface IPlanet {}

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  baseUrl = environment.apiUrl + 'planets';

  planetsSig = signal<IPlanets | any>({})

  planetSig = signal<IPlanet | any>({})

  planet$ = new Subject<IPlanet | any>();

  constructor(private http: HttpClient) { }

  getPlanets(page = '') {
    return this.http.get(this.baseUrl + page).pipe(
      tap((res) => {
        this.planetsSig.set(res);
      })
    );
  }

  getPlanet(url: string) {
    return this.http.get(url).pipe(
      tap((res) => {
        this.planet$.next(res);
      })
    );
  }
}
