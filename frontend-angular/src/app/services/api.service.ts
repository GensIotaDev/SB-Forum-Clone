import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of } from "rxjs";
//import {Thread} from "../thread/thread.interface";
import {PagedModel} from "./paged-model.interface";
import {Credential, LoginResponse} from "./authentication-model.interface";
import {Post} from "../models/post.interface";
import {User} from "../models/user.interface";
import {Thread} from "../models/thread.interface";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  authenticated = true;

  user: User = { id: 0, username: 'TestUser1' };
  posts: Post[] = [
    { id: 0, author: this.user, posted_on: new Date(), content: "Content 1", reactions: [] },
    { id: 1, author: this.user, posted_on: new Date(2024,0,24), content: "Content 2", reactions: []}
  ];
  thread: Thread = {
    id: 0,
    tags: [],
    threadmarks: [{
      id: 0,
      name: 'mark-1'
    }]
  };

  constructor(private http: HttpClient) { }

  authenticate(credentials: Credential, callback: Function){
    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get<LoginResponse>('/api/users', {headers:headers}).subscribe(response => {
      this.authenticated = !!response.name;
    });
    return callback && callback();
  }

  getUserByJoinedId(id: string) : Observable<User>{
    return of(this.user);
  }
  getThreadById(id: string) : Observable<Thread> {
    return of(this.thread);
  }
  getThreadsByForum(forum: string) : Observable<PagedModel<Thread>>{
    return this.http.get<PagedModel<Thread>>(`/api/forums/${forum}/`);
  }

  getPostsByThread(thread: string): Observable<Post[]> {
    //return Observable.of(this.posts);
    return of(this.posts);
  }

  createThread(forum: string, body: any): Observable<any> {
    return this.http.post(`/api/forums/${forum}/`, body);
  }

  /* MEMBERS */
  getOnlineMembers<T>() : Observable<T>{
    return this.http.get<T>(`/api/users/online`);
  }

  create<T>(url: string, payload: T){
    console.log(payload);
    return this.http.post(url, payload);
  }
  get<T>(url: string, params: any = {}) : Observable<T>{
    return this.http.get<T>(url, { params: params });
  }
}
