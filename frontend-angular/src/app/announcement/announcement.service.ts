import { Injectable } from '@angular/core';
import {Announcement, NoticeFragment} from "./announcement.interface";
import {map, Observable, of} from "rxjs";
import {DomSanitizer} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  announcements : Announcement[] = [
    {
      'fragments': [
        { 'content': "Announcement 1<ul><li>Testing <a routerLink='forums/0'>Link</a></li></ul>" },
        { 'content': "Part 2"}
      ],
      'visible': true
    }
  ];

  /*
   * TODO: store notice dismissal in localStorage based on notice id.
   * Remove from storage if id is not received on request.
   */
  constructor(private sanitizer: DomSanitizer) {
    for(let notice of this.announcements){
      for(let frag of notice.fragments){
        frag.safeContent = this.sanitizer.bypassSecurityTrustHtml(frag.content);
      }
    }
  }

  getAnnouncements() : Observable<Announcement[]>{
    return of(this.announcements);
  }
  dismiss(index: number){
    this.announcements[index].visible = false;
  }
}
