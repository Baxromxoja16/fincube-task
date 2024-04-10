import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { MaterialModule } from '../../../shared/material.module';
import { CardComponent } from '../../components/card/card.component';
import { ShipsService } from '../../services/ships.service';
@Component({
  selector: 'app-ships',
  standalone: true,
  imports: [MaterialModule, CardComponent],
  templateUrl: './ships.component.html',
  styleUrl: './ships.component.scss'
})
export class ShipsComponent {
  subscription = new Subscription()
  shipsSig = this.shipsService.shipsSig
  pageSize = 10;

  constructor(private shipsService: ShipsService) {}

  ngOnInit(): void {
    const getShips = this.shipsService.getAll().subscribe();

    this.subscription.add(getShips)
  }

  handlePageEvent(e: PageEvent) {
    const page = '?page=' + (e.pageIndex + 1);
    const getShips = this.shipsService.getAll(page).subscribe();
    this.subscription.add(getShips)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
