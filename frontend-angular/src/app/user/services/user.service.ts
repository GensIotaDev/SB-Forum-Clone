import { Injectable, signal } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  profileSignal = signal<boolean | null>(null);

  constructor(private http: HttpClient) {
  }

  tryLoginWith(userRequest: any) : Observable<any>{
    return this.http.post('api/login', userRequest);
  }

  tryRegisterWith(newUserRequest: any) : Observable<any>{
    //TODO: setup and send via https
    return this.http.post('api/register', newUserRequest);
  }
}
