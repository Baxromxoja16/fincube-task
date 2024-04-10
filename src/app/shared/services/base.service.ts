import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, signal } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {

  datasSig = signal<T | any>({})

  dataSig = signal<T | any>({})

  data$ = new Subject<T | any>();

  protected constructor(private http: HttpClient, @Inject(String) private endpointUrl: string) { }

  getAll(page = ''): Observable<T> {
    return this.http.get<T>(this.endpointUrl+page).pipe(
      tap((res) => {
        this.datasSig.set(res);
      })
    );;
  }

  getById(url: string): Observable<T> {
    return this.http.get<T>(url).pipe(
      tap((res) => {
        this.data$.next(res);
      })
    );;
  }
}
