import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {User} from "../../models/user.interface";
import {ApiService} from "../../services/api.service";
import {AsyncPipe, KeyValuePipe, NgClass, NgOptimizedImage, UpperCasePipe} from "@angular/common";


@Component({
  selector: 'user',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe,
    NgOptimizedImage,
    UpperCasePipe,
    KeyValuePipe,
    NgClass,
    RouterOutlet,
    RouterLinkActive,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  @Input() id! : string;
  @Input() modal: boolean = false;
  user$!: Observable<User>;

  metrics = {
    "Messages" : 13,
    "Likes" : 4,
    "Awards" : 1
  };
  subpages = [
    { title: "Profile posts", url: "./" },
    { title: "Latest activity", url: "latest-activity" },
    { title: "Postings", url: "recent-content" },
    { title: "Awards", url: "awards" },
    { title: "About", url: "about" },
    { title: "Post areas", url: "post-areas" }
  ];

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.user$ = this.api.getUserByJoinedId(this.id);
  }

  onPageChange(page: number): void {
    console.log("change to page " + page);
  }
}
