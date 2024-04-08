import { Component } from '@angular/core';
import { DetailService } from '../../services/detail.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  detail = this.detailService.detailSig;

  constructor(private detailService: DetailService) {}
}
