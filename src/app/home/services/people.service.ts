import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';

export interface IPeoples {}
export interface IPeople {}

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  baseUrl = environment.apiUrl + 'people';

  peoplesSig = signal<IPeoples | any>({})

  peopleSig = signal<IPeople | any>({})

  people$ = new Subject<IPeople | any>();

  constructor(private http: HttpClient) { }

  getPeoples(page = '') {
    return this.http.get(this.baseUrl + page).pipe(
      tap((res) => {
        this.peoplesSig.set(res);
      })
    );
  }

  getPeople(url: string) {
    return this.http.get(url).pipe(
      tap((res) => {
        this.people$.next(res);
      })
    );
  }
}
