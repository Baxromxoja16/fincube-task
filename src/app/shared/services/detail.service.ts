import { Injectable, signal } from '@angular/core';
import { IFilm } from '../../home/pages/services/films.service';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  detailSig = signal<IFilm | any>({})

  constructor() { }
}
