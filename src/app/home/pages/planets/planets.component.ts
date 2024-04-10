import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { MaterialModule } from '../../../shared/material.module';
import { PlanetService } from '../../services/planets.service';

@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.scss'
})
export class PlanetsComponent implements OnInit, OnDestroy {
  subscription = new Subscription()
  planetsSig = this.planetService.planetsSig
  pageSize = 10;

  constructor(private planetService: PlanetService) {}

  ngOnInit(): void {
    const getPlanets = this.planetService.getAll().subscribe();

    this.subscription.add(getPlanets)
  }

  handlePageEvent(e: PageEvent) {
    const page = '?page=' + (e.pageIndex + 1);
    const getPlanets = this.planetService.getAll(page).subscribe();
    this.subscription.add(getPlanets)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
