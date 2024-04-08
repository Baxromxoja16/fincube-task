import { DatePipe } from '@angular/common';
import { Component, OnInit, OnDestroy, WritableSignal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { MaterialModule } from '../../../shared/material.module';
import { FilmsService, IFilms } from '../services/films.service';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [MaterialModule, DatePipe, RouterLink],
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss'
})
export class FilmsComponent implements OnInit, OnDestroy {
  films: WritableSignal<IFilms | any> = this.filmsService.filmsSig;

  subscription = new Subscription();

  constructor(
    private filmsService: FilmsService,
    private router: Router
    ) {}

  ngOnInit(): void {
    const getFilms = this.filmsService.getFilms().subscribe();

    console.log(this.filmsService.filmsSig());

    this.subscription.add(getFilms);
  }

  detailCard(url: string) {
    const getFilm = this.filmsService.getFilm(url).subscribe();

    this.subscription.add(getFilm);

    if(this.filmsService.filmSig().episode_id) {
      this.router.navigate(['/home/films/detail']);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
