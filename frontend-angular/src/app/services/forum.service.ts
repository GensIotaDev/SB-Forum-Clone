import {Injectable} from '@angular/core';
import {map, mergeMap, Observable, of, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Forum} from "../forum/models/forum.interface";
import {LinkSignature} from "../forum";

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  private readonly apiPath: string = `/api/forums`;
  private forums: Map<number, Forum> = new Map<number, Forum>();
  //
  private lastUpdate : { id : number, time: number } = { id: 0, time: 0};

  constructor(private http: HttpClient) {
  }

  //TODO: handle improper id values
  getForum(id: number) : Observable<Forum> {
    let observers : Observable<Forum>;
    if(this.lastUpdate.time == 0) {
      observers = this.initialize()
        .pipe(
          map(_ => {
            let f = this.forums.get(id);
            if(!f) throw new Error(`Id: ${id} is not a valid forum`);

            return f;
          })
        );
    }
    else if(this.lastUpdate.id != id || Date.now() - this.lastUpdate.time > 15000){
      observers = this.http.get<Forum>(this.apiPath + `/${id}`, {
        params: { since: this.lastUpdate.time }
      })
        .pipe(
          tap(data => this.insertOrPatch(data))
        );
    }
    else{
      let f = this.forums.get(id);
      if(!f) throw new Error(`Id: ${id} is not a valid forum`);

      observers = of(f);
    }

    return observers.pipe(
      tap(_ => this.lastUpdate = { id: id, time: Date.now() })
    );
  }
  getForumContainers() : Observable<Forum[]> {
    let observers : Observable<Forum[]>;

    if(this.lastUpdate.time == 0 || this.lastUpdate.id != 0 || Date.now() - this.lastUpdate.time > 15000){
      observers = this.initialize();
    }
    else{
      let root : Forum[] = [];
      for(let f of this.forums.values()){
        if(!f.parentId) root.push(f);
      }

      observers = of(root);
    }

    return observers.pipe(
      tap(_ => this.lastUpdate = {id: 0, time: Date.now()})
    );
  }

  getForumStats() : Observable<any[]>{
    return of([]);//return this.http.get<any[]>("/api/statistics");
  }

  createForum(form:any) : Observable<any>{
    return this.http.post(this.apiPath, form);
  }

  public getPathFromRoot(id: number) : Observable<LinkSignature[]>{
    return this.getForum(id)
      .pipe(
        map(f => {
          let node : Forum | undefined = f;
          let output :LinkSignature[] = [];
          while(node){
            if(node.id != id) {
              output.push(node);
            }

            node = (node.parentId)? this.forums.get(node.parentId) : undefined;
          }

          return output.reverse();
        })
      );
  }

  private initialize() : Observable<Forum[]>{
    this.forums.clear();

    return this.http.get<Forum[]>(this.apiPath, {
      params: { since: this.lastUpdate.time }
    }).pipe(
      tap(data => {
        for(let f of data){
          this.insertOrPatch(f);
        }
      })
    );
  }

  private insertOrPatch(forum: Forum){
    let workingSet = [forum];

    while(workingSet.length > 0){
      let node = workingSet.pop()!;
      node.url = ((node.parentId)? '/forums/' : "/#") + `${this.sanitizeToUrl(node.title)}.${node.id}`;

      for(let c of node.children ?? []){
        c.parentId = node.id;
        workingSet.push(c);
      }
      this.forums.set(node.id, node);
    }
  }

  private sanitizeToUrl(value: string) : string {
    const re = new RegExp("\\W+", "g");
    value = value.replaceAll(re, '-');
    value = value.toLowerCase();

    return value;
  }
}
