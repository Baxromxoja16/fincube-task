import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

export interface IFilms {

}
export interface IFilm {

}

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  baseUrl = environment.apiUrl + 'films';

  filmsSig = signal<IFilms | any>({})

  filmSig = signal<IFilm | any>({});

  constructor(private http: HttpClient) { }

  getFilms() {
    return this.http.get(this.baseUrl).pipe(
      tap((res) => {
        this.filmsSig.set(res);
      })
    );
  }

  getFilm(url: string) {
    return this.http.get(url).pipe(
      tap((res) => {
        this.filmSig.set(res);
      })
    );
  }
}
