import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { BaseService } from '../../shared/services/base.service';
import { IFilmListResponse, IFilms } from '../pages/films/films.model';

@Injectable({
  providedIn: 'root'
})
export class FilmsService extends BaseService<IFilmListResponse, IFilms>{
  filmsSig: WritableSignal<IFilmListResponse> = this.datasSig;

  filmSig = this.dataSig;

  film$ = this.data$;

  constructor(http: HttpClient) {
    super(http, environment.apiUrl + 'films')
  }
}
