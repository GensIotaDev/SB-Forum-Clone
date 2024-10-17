import {Component, Input, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ApiService} from "../../services/api.service";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'stub-online-users',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './stub-online-users.component.html'
})
export class StubOnlineUsersComponent implements OnInit {
  @Input() page: string = "home";
  userProfile : any = null;
  constructor(private apiService: ApiService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.userProfile = this.authService.profileId();
  }
}
