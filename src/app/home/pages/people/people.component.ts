import { Component, OnInit, OnDestroy } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';
import { PeopleService } from '../../services/people.service';
import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [MaterialModule, CommonModule, CardComponent],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
})
export class PeopleComponent implements OnInit, OnDestroy {
  peopleSig = this.peopleService.peoplesSig
  pageSize = 10;
  subscription = new Subscription()

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    const getPeople = this.peopleService.getAll().subscribe();

    this.subscription.add(getPeople);
  }

  handlePageEvent(e: PageEvent) {
    const page = '?page=' + (e.pageIndex + 1);
    const getPeople = this.peopleService.getAll(page).subscribe();
    this.subscription.add(getPeople);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
