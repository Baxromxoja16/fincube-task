import { DatePipe } from '@angular/common';
import { Component, OnInit, OnDestroy, WritableSignal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { MaterialModule } from '../../../shared/material.module';
import { DetailService } from '../../../shared/services/detail.service';
import { FilmsService } from '../../services/films.service';
import { IFilmListResponse } from './films.model';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [MaterialModule, DatePipe, RouterLink],
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss'
})
export class FilmsComponent implements OnInit, OnDestroy {
  films: WritableSignal<IFilmListResponse> = this.filmsService.filmsSig;

  subscription = new Subscription();

  constructor(
    private filmsService: FilmsService,
    private detailService: DetailService,
    private router: Router
    ) {}

  ngOnInit(): void {
    const getFilms = this.filmsService.getAll().subscribe();

    this.subscription.add(getFilms);
  }

  detailCard(url: string) {
    const getFilm = this.filmsService.getAll(url).subscribe();

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
