import {Component, Input} from "@angular/core";
import {ThreadCardComponent} from "./thread-card.component";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";
import {SlicePipe} from "@angular/common";
import {Thread} from "../thread/thread.interface";

@Component({
  selector: 'thread-list',
  templateUrl: './thread-list.component.html',
  styleUrl: './thread-list.component.css',
  standalone: true,
  imports: [ThreadCardComponent, NgbPagination, SlicePipe],
  inputs: ['threads','page']

})
export class ThreadListComponent {
  @Input({required: true}) threads : Thread[] = [];
  @Input() page : number = 1;
  @Input() collectionSize : number = 0;
  pageSize = 25;

  onPageChange(page1 : number) {
    this.page = page1;
  }

  protected readonly Math = Math;
}
