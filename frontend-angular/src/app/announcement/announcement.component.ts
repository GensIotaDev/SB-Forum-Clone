import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import {AnnouncementService} from "./announcement.service";
import {Observable} from "rxjs";
import {Announcement} from "./announcement.interface";
import {AsyncPipe} from "@angular/common";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-announcement',
  standalone: true,
  imports: [
    RouterLink,
    NgbTooltipModule,
    AsyncPipe
  ],
  templateUrl: './announcement.component.html',
  styleUrl: './announcement.component.scss'
})
export class AnnouncementComponent {
  announcements$ : Observable<Announcement[]>;

  constructor(private service: AnnouncementService, ) {
    this.announcements$ = service.getAnnouncements();
  }

  dismiss(index: number){
    this.service.dismiss(index);
  }
}
