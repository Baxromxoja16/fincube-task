import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { tap, Subject } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { BaseService } from '../../shared/services/base.service';

export interface IFilms {

}
export interface IFilm {

}

@Injectable({
  providedIn: 'root'
})
export class FilmsService extends BaseService<IFilms>{
  filmsSig = this.datasSig;

  filmSig = this.dataSig;

  film$ = this.data$;

  constructor(http: HttpClient) {
    super(http, environment.apiUrl + 'films')
  }
}
