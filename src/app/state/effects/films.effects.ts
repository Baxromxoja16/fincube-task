import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { FilmsService } from '../../home/services/films.service';
import * as FilmActions from '../actions/films.actions';

@Injectable()
export class FilmEffects {
  loadFilms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FilmActions.loadFilms),
      switchMap(() =>
        this.filmsService.getAll().pipe(
          map(films => FilmActions.loadFilmsSuccess({ films })),
          catchError(error => of(FilmActions.loadFilmsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private filmsService: FilmsService
  ) {}
}
