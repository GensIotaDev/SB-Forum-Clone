import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'forum-page',
  standalone: true,
  imports: [
  ],
  templateUrl: './forum-page.component.html',
  styleUrl: './forum-page.component.scss'
})
export class ForumPageComponent implements OnInit {
  @Input()
  set ppage(param: string) {
    if(!param) {
      this.page = 1;
      return;
    }
    let parts = param.split('.')
    this.page = +parts[1];
  }

  page : number = 1;


  constructor() {
  }

  ngOnInit(): void {

  }
}
