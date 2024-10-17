import {Component, Input} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {ApiService} from "../services/api.service";
import {ProfileModalComponent} from "./profile-modal/profile-modal.component";

@Component({
    selector: 'floating-menu',
    standalone: true,
    imports: [RouterOutlet, RouterLink, RouterLinkActive, ProfileModalComponent],
    templateUrl: './floating-menu.component.html',
    styleUrl: './floating-menu.component.css'
})
export class FloatingMenuComponent {
  modalActive = false;
  constructor(private api: ApiService) {}

  isLoggedIn(): boolean {
    return this.api.authenticated;
  }

  toggleModal(){
    this.modalActive = !this.modalActive;
  }
}
