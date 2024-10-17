import {Component, Input, OnInit} from "@angular/core";
import {ThreadListComponent} from "../thread-list.component";
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from "@angular/router";
import {ForumService} from "../../services/forum.service";
import {
  NgbCollapse
} from "@ng-bootstrap/ng-bootstrap";
import {FilterComponent} from "./filter.component";
import {AsyncPipe, NgIf, NgTemplateOutlet} from "@angular/common";
import {PaginationComponent} from "../../common/components/pagination/pagination.component";
import {delay, Observable, tap} from "rxjs";
import {ForumRowComponent} from "./forum-row.component";
import {Forum} from "../models/forum.interface";

@Component({
    selector: 'forum',
    templateUrl: './forum.component.html',
    styleUrl: './forum.component.scss',
    standalone: true,
  imports: [
    ThreadListComponent,
    RouterLink,
    RouterOutlet,
    NgbCollapse, FilterComponent, NgTemplateOutlet, PaginationComponent, AsyncPipe, NgIf, ForumRowComponent]
})
export class ForumComponent implements OnInit {
  id : number = 0;
  page : number = 1;
  itemsPerPage = 10;
  collectionSize = 1000;

  forum$! : Observable<Forum>;
  loaded$ : any;

  constructor(private router: Router, private route: ActivatedRoute, private forumService: ForumService) {
    this.loaded$ = this.route.url.subscribe(segments => {
      this.configure(segments.slice(-1)[0].path);
    });
  }

  ngOnInit(): void {
  }

  configure(url: string): void {
    let parts = url.split('.');
    this.id = +parts[1];
    this.forum$ = this.forumService.getForum(this.id);
  }

  changeFilter(event: any){

  }
  onPageChange(){
    let path = './';
    if(this.page > 1){
      path = `page-${this.page}`;
    }
    this.router.navigate([path], {relativeTo: this.route});
  }
}
