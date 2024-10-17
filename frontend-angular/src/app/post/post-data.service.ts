import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Post} from "./post.interface";

@Injectable({providedIn: 'root'})
export class PostDataService {
  constructor(private http: HttpClient) {
  }

  getPosts() : Observable<Post[]>{
    return this.http.get<Post[]>('http://localhost:8085/api/posts');
  }
}
