import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { DetailService } from '../../services/detail.service';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MaterialModule, SharedModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  detail = this.detailService.detailSig;

  constructor(private detailService: DetailService) {}
}
