import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { BaseService } from '../../shared/services/base.service';

export interface ITransports {}
export interface ITransport {}

@Injectable({
  providedIn: 'root'
})
export class TransportService extends BaseService<ITransports>{
  transportsSig = this.datasSig;

  transportSig = this.dataSig;

  transport$ = this.data$;

  constructor(http: HttpClient) {
    super(http, environment.apiUrl + 'vehicles')
  }
}
