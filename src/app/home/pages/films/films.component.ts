import { DatePipe } from '@angular/common';
import { Component, OnInit, OnDestroy, WritableSignal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { MaterialModule } from '../../../shared/material.module';
import { DetailService } from '../../../shared/services/detail.service';
import { loadFilms } from '../../../state/actions/films.actions';
import { FilmState } from '../../../state/reducers/films.reducer';
import { selectAllFilms } from '../../../state/selectors/films.selectors';
import { CardComponent } from '../../components/card/card.component';
import { FilmsService } from '../../services/films.service';
import { IFilmListResponse } from './films.model';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [MaterialModule, DatePipe, RouterLink, CardComponent],
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss'
})
export class FilmsComponent implements OnInit, OnDestroy {
  films: WritableSignal<IFilmListResponse> = this.filmsService.filmsSig;
  films$ = this.store.select(selectAllFilms);

  subscription = new Subscription();

  constructor(
    private filmsService: FilmsService,
    private detailService: DetailService,
    private router: Router,
    private store: Store<FilmState>
    ) {
    }

  ngOnInit(): void {
    this.store.dispatch(loadFilms());

  }

  detailCard(url: string) {
    const getFilm = this.filmsService.getById(url).subscribe();

    this.subscription.add(getFilm);

    this.filmsService.film$.subscribe((res) => {
      if(res.url) {
        this.detailService.detailSig.set(res);
        this.router.navigate(['/home/detail']);
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
