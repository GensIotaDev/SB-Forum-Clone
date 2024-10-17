import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ApiService} from "../services/api.service";
import {Post} from "../models/post.interface";
import {AsyncPipe, formatDate} from "@angular/common";
import {PostComponent} from "../components/posts/post.component";
import {Thread} from "../models/thread.interface";

@Component({
    selector: 'thread',
    standalone: true,
  imports: [
    AsyncPipe,
    PostComponent
  ],
    templateUrl: './thread.component.html',
    styleUrl: './thread.component.css'
})
export class ThreadComponent implements OnInit {
  @Input() id!: string;
  thread$! : Observable<Thread>;
  post$! : Observable<Post[]>;

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.thread$ = this.api.getThreadById(this.id);
    this.post$ = this.api.getPostsByThread(this.id);
  }

  protected readonly formatDate = formatDate;
}
