import { createReducer, on } from '@ngrx/store';
import { loadFilms, loadFilmsSuccess, loadFilmsFailure } from '../actions/films.actions';
import { IFilmListResponse } from '../../home/pages/films/films.model';

export interface FilmState {
  films: IFilmListResponse;
  error: any;
}

export const initialState: FilmState = {
  films: {} as IFilmListResponse,
  error: null
};

export const filmsReducer = createReducer(
  initialState,
  on(loadFilms, state => ({ ...state })),
  on(loadFilmsSuccess, (state, { films }) => ({ ...state, films })),
  on(loadFilmsFailure, (state, { error }) => ({ ...state, error }))
);
