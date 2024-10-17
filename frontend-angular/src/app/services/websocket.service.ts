import { Injectable } from '@angular/core';
import {webSocket} from "rxjs/webSocket";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private readonly URL = 'ws://localhost:8085';
  private webSocketSubject = webSocket<string>(this.URL);
  public webSocket$ = this.webSocketSubject.asObservable();

  changeRoom(name : string) {
    this.webSocketSubject.next(JSON.stringify(name));
  }
}
