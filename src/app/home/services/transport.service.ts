import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { BaseService } from '../../shared/services/base.service';
import { IVehicleListResponse } from '../pages/tansport/vehicles.model';

@Injectable({
  providedIn: 'root'
})
export class TransportService extends BaseService<IVehicleListResponse>{
  transportsSig = this.datasSig;

  transportSig = this.dataSig;

  transport$ = this.data$;

  constructor(http: HttpClient) {
    super(http, environment.apiUrl + 'vehicles')
  }
}
