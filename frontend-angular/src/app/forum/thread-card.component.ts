import {Component, Input} from "@angular/core";
import {Thread} from "../thread/thread.interface";

@Component({
  selector: 'thread-card',
  templateUrl: './thread-card.component.html',
  styleUrl: './thread-card.component.css',
  standalone: true
})
export class ThreadCardComponent {
  @Input({required: true}) thread! : Thread;

  constructor() {
  }
}
