import {Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {StubOnlineUsersComponent} from "../components/online/stub-online-users.component";
import {
  NgbCollapse, NgbDropdownModule
} from "@ng-bootstrap/ng-bootstrap";
import {RouterLink} from "@angular/router";
import {interval, Observable, tap} from "rxjs";
import {CollapsableCardComponent} from "../card/collapsable-card.component";
import {AsyncPipe, NgClass, NgIf} from "@angular/common";
import {ForumService} from "../services/forum.service";
import {TimeSincePipe} from "../directives/time-since.pipe";
import {CardForumStatisticsComponent} from "../forum/components/card-forum-statistics.component";
import {Forum} from "../forum/models/forum.interface";
import {ForumRowComponent} from "../forum/components/forum-row.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    StubOnlineUsersComponent,
    NgbCollapse,
    RouterLink,
    CollapsableCardComponent,
    AsyncPipe,
    NgIf,
    NgClass,
    TimeSincePipe,
    CardForumStatisticsComponent,
    NgbDropdownModule,
    ForumRowComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy{
  now:Date = new Date();
  private token: any;
  forums$! : Observable<Forum[]>;

  constructor(private ngZone: NgZone, private forumService: ForumService) {
  }

  ngOnInit(): void {
    let timer = interval(60000);
    this.ngZone.runOutsideAngular(()=>{
      this.token = timer.subscribe(_ => this.ngZone.run(() => this.now = new Date()));
    });

    this.forums$ = this.forumService.getForumContainers();
  }

  ngOnDestroy(): void {
    if(this.token) {
      this.token.unsubscribe();
    }
  }
}
