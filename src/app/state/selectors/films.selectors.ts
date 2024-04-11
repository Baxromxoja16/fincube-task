import { createSelector } from '@ngrx/store';
import { FilmState } from '../reducers/films.reducer';

export const selectFilms = (state: FilmState) => state.films;

export const selectAllFilms = createSelector(
  selectFilms,
  (films) => films
);
