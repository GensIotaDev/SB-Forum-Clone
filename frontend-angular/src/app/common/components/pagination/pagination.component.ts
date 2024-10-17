import {Component, Input, Output, EventEmitter} from "@angular/core";
import {
  NgbCollapse,
  NgbPaginationModule,
  NgbPopoverModule
} from "@ng-bootstrap/ng-bootstrap";
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  standalone: true,
  imports: [
    NgbPaginationModule,
    NgbPopoverModule,
    NgbCollapse, NgTemplateOutlet]
})
export class PaginationComponent {
  @Input() page : number = 1;
  @Output() pageChange = new EventEmitter<number>();

  @Input({required: true}) collectionSize = 0;
  @Input({required: true}) itemsPerPage = 10;

  constructor() {
  }

  onPageChange(){
    this.pageChange.emit(this.page);
  }
}
