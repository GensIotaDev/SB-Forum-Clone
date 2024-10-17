import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models/post.interface";
import {Thread, Threadmark} from "../../models/thread.interface";
import {RouterLink} from "@angular/router";
import {DatePipe, NgClass, NgOptimizedImage, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'post',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
    NgClass,
    UpperCasePipe,
    DatePipe
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{
  @Input() post!: Post;
  @Input() thread!: Thread;
  @Input() threadmark?: Threadmark;

  static readonly TimeToNew: number = 86400000;
  isNew: Boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    var diff = Date.now() - this.post.posted_on.valueOf();
    this.isNew = (Date.now() - this.post.posted_on.valueOf()) <= PostComponent.TimeToNew;
    console.log("Time diff: " + diff);
  }

  toggleThreadmarkModal(){

  }
}
