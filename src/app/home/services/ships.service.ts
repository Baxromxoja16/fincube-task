import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Subject, tap } from 'rxjs';
import { BaseService } from '../../shared/services/base.service';

export interface IShips {}
export interface IShip {}


@Injectable({
  providedIn: 'root'
})
export class ShipsService extends BaseService<IShips> {
  shipsSig = this.datasSig;

  shipSig = this.dataSig;

  ship$ = this.data$;

  constructor(http: HttpClient) {
    super(http, environment.apiUrl + 'planets')
  }
}
