import { Injectable, signal } from '@angular/core';
import { IFilmListResponse, IFilms } from '../../home/pages/films/films.model';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  detailSig = signal<IFilms>({} as IFilms);

  constructor() { }
}
