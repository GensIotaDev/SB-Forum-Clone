import {Component, OnInit} from "@angular/core";
import {PostDataService} from "./post-data.service";
import {Post} from "./post.interface";

@Component({
    selector: 'post-list',
    templateUrl: './post.component.html',
    standalone: true
})
export class PostListComponent implements OnInit {
    posts! : Post[];
    constructor(private postService: PostDataService) {
    }

    ngOnInit() {
        this.postService.getPosts().subscribe(data => {
            this.posts = data;
        });
    }
}
