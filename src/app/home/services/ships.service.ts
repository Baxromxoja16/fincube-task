import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Subject, tap } from 'rxjs';

export interface IShips {}
export interface IShip {}


@Injectable({
  providedIn: 'root'
})
export class ShipsService {
  baseUrl = environment.apiUrl + 'planets';

  shipsSig = signal<IShips | any>({})

  shipSig = signal<IShip | any>({})

  ship$ = new Subject<IShip | any>();

  constructor(private http: HttpClient) { }

  getShips(page = '') {
    return this.http.get(this.baseUrl + page).pipe(
      tap((res) => {
        this.shipsSig.set(res);
      })
    );
  }

  getShip(url: string) {
    return this.http.get(url).pipe(
      tap((res) => {
        this.ship$.next(res);
      })
    );
  }
}
