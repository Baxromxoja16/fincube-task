import { CommonModule } from '@angular/common';
import { Component, ContentChild, TemplateRef } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';
import { FilmsComponent } from '../../pages/films/films.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @ContentChild('headerTemplate') headerTemplate!: TemplateRef<Element>;
  @ContentChild('contentTemplate') contentTemplate!: TemplateRef<Element>;
  @ContentChild('actionsTemplate') actionsTemplate!: TemplateRef<Element>;
}
