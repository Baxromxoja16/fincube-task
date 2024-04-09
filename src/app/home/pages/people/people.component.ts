import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
})
export class PeopleComponent implements OnInit {
  peopleSig = this.peopleService.peoplesSig

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.getPeoples().subscribe();
  }
}
