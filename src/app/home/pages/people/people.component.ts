import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';
import { PeopleService } from '../../services/people.service';
import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
})
export class PeopleComponent implements OnInit {
  peopleSig = this.peopleService.peoplesSig
  pageSize = 10;

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.getPeoples().subscribe();
  }

  handlePageEvent(e: PageEvent) {
    const page = '?page=' + (e.pageIndex + 1);
    this.peopleService.getPeoples(page).subscribe();
  }
}
