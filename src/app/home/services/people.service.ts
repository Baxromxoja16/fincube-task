import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { BaseService } from '../../shared/services/base.service';

export interface IPeoples {}
export interface IPeople {}

@Injectable({
  providedIn: 'root'
})
export class PeopleService extends BaseService<IPeoples | any>{
  baseUrl = environment.apiUrl + 'people';

  peoplesSig = this.datasSig
  peopleSig = this.dataSig
  people$ = this.data$

  constructor(http: HttpClient) {
    super(http, environment.apiUrl + 'people');
  }
}
