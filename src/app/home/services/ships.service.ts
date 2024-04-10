import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Subject, tap } from 'rxjs';
import { BaseService } from '../../shared/services/base.service';
import { StarshipListResponse } from '../pages/ships/ships.model';

@Injectable({
  providedIn: 'root'
})
export class ShipsService extends BaseService<StarshipListResponse> {
  shipsSig = this.datasSig;

  shipSig = this.dataSig;

  ship$ = this.data$;

  constructor(http: HttpClient) {
    super(http, environment.apiUrl + 'planets')
  }
}
