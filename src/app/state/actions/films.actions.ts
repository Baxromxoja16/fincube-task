import { createAction, props } from '@ngrx/store';
import { IFilmListResponse } from '../../home/pages/films/films.model';

export const loadFilms = createAction('[Films Page] Load Films');
export const loadFilmsSuccess = createAction('[Films API] Films Loaded Success', props<{ films: IFilmListResponse }>());
export const loadFilmsFailure = createAction('[Films API] Films Loaded Failure', props<{ error: any }>());
