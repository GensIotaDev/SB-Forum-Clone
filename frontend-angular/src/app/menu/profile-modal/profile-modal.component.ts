import { Component } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'profile-modal',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './profile-modal.component.html',
  styleUrl: './profile-modal.component.css'
})
export class ProfileModalComponent {

  constructor(private api: ApiService) {
  }

  logout(){
    console.log('request [Logout]');
  }
}
