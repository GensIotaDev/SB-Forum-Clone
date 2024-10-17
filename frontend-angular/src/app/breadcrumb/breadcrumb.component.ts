import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterLink} from "@angular/router";
import {AsyncPipe, NgClass} from "@angular/common";
import {distinctUntilChanged, filter, map, mergeMap, Observable, of, startWith, tap} from "rxjs";
import {LinkSignature} from "../forum";
import {ForumService} from "../services/forum.service";

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
    AsyncPipe
  ],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs$! : Observable<LinkSignature[]>;

  constructor(private route: Router, private service: ForumService) {
  }

  ngOnInit(): void {
    this.breadcrumbs$ = this.route.events.pipe(
      startWith(new NavigationEnd(0, '', '')),
      map((event) => {
        return event instanceof NavigationEnd ? event.url : undefined
      }),
      filter(x => x != undefined),
      distinctUntilChanged(),
      mergeMap(x => this.getPathLinks(x))
    );
  }

  private getPathLinks(url : string): Observable<LinkSignature[]>{
    let parts = url.split('/').filter(p => p != "");

    if(parts.length == 0){
      return of([]);
    }

    switch(parts[0]){
      case "forums":
        let id = +parts[1].split('.')[1];
        return this.service.getPathFromRoot(id);
      case "threads":
        break;
      case "announcements":
        break;
      default:
        break;
    }

    return of([]);
  }
}
