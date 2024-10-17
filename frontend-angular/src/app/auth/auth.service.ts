import {effect, Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Profile} from "./models/profile.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  profileId = signal<number|null>(null);

  constructor(private http: HttpClient) {
    effect(() => {
      let sId = window.localStorage.getItem("userid");
      this.profileId.update(value => sId? +sId : null);
    }, {
      allowSignalWrites: true
    })

  }

  tryLoginWith(userRequest: any) : Observable<number>{
    return this.http.post<number>('api/login', userRequest)
      .pipe(
        tap(id => {
          this.profileId.set(id);
          window.localStorage.setItem("userid", id.toString());
        })
      );
  }

  tryRegisterWith(newUserRequest: any) : Observable<any>{
    //TODO: setup and send via https
    return this.http.post('api/register', newUserRequest);
  }

  logout() : Observable<any> {
    return this.http.get('api/logout')
      .pipe(
        tap(_ => {
          this.profileId.set(null);
          window.localStorage.removeItem("userid");
        })
      );
  }
}
