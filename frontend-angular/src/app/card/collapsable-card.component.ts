import {Component, Input} from '@angular/core';
import {NgbCollapseModule} from "@ng-bootstrap/ng-bootstrap";
import {NgClass} from "@angular/common";

@Component({
  selector: 'collapsable-card',
  standalone: true,
  imports: [
    NgbCollapseModule,
    NgClass
  ],
  templateUrl: './collapsable-card.component.html',
  styleUrl: './collapsable-card.component.scss'
})
export class CollapsableCardComponent {
  @Input() cardClass : string = '';
  @Input() headerClass : string = '';
  isCollapsed = false;

  constructor() {
  }
}
