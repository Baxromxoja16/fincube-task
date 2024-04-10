import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { MaterialModule } from '../../../shared/material.module';
import { CardComponent } from '../../components/card/card.component';
import { TransportService } from '../../services/transport.service';

@Component({
  selector: 'app-tansport',
  standalone: true,
  imports: [MaterialModule, CardComponent],
  templateUrl: './tansport.component.html',
  styleUrl: './tansport.component.scss'
})
export class TansportComponent {
  subscription = new Subscription();
  transportSig = this.transportService.transportsSig;
  pageSize = 10;

  constructor(private transportService: TransportService) {}

  ngOnInit(): void {
    const getTransports = this.transportService.getAll().subscribe();

    this.subscription.add(getTransports);
  }

  handlePageEvent(e: PageEvent) {
    const page = '?page=' + (e.pageIndex + 1);
    const getTransports = this.transportService.getAll(page).subscribe();
    this.subscription.add(getTransports);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
