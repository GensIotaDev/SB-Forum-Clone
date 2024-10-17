import {Component, Input, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ForumService} from "../../services/forum.service";
import {Observable, tap} from "rxjs";
import {AsyncPipe, KeyValue} from "@angular/common";

@Component({
  selector: 'card-forum-statistics',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './card-forum-statistics.component.html'
})
export class CardForumStatisticsComponent implements OnInit {
  stats$! : Observable<any[]>;

  constructor(private forumService: ForumService) {
  }

  ngOnInit(): void {
    this.stats$ = this.forumService.getForumStats();
  }
}
