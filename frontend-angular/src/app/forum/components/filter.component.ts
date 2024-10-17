import {Component, output} from "@angular/core";

import {RouterLink, RouterOutlet} from "@angular/router";
import {NgbCollapse, NgbPagination} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgbPagination, NgbCollapse]
})
export class FilterComponent {
  isFilterCollapsed :boolean = false;

  submit = output<any>();

  constructor() {
  }

  toggleFilterView(){
    this.isFilterCollapsed = !this.isFilterCollapsed;
  }
}
