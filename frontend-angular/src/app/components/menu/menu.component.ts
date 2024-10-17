import {Component, computed, inject, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {
  NgbDropdownModule,
  NgbCollapse,
  NgbNav,
  NgbNavItem,
  NgbNavLinkButton
} from "@ng-bootstrap/ng-bootstrap";
import {NgClass} from "@angular/common";
import {AuthService} from "../../auth/auth.service";
import {Profile} from "../../auth/models/profile.interface";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink,
    NgbNav,
    NgbNavItem,
    NgbNavLinkButton,
    NgbCollapse,
    NgClass,
    NgbDropdownModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent{
  isMenuCollapsed = true;
  isAuthenticated = computed(() => {
    return this.authService.profileId() != null;
  })

  siteLinkGroups : MenuLink[] = [
    new MenuLink({
      name: "What's new",
      header: true,
      url: '/whats-new',
      children: [
        new MenuLink({ name: 'New posts', url: '/posts' }),
        new MenuLink({ name: 'New threadmarks', url: '/threadmarks' }),
        new MenuLink({ name: 'New profile posts', url: '/profile-posts' }),
        new MenuLink({ name: 'New awards', url: '/awards' }),
      ]
    }),
    new MenuLink({
      name: 'Members',
      url: '/users',
      children: [
        new MenuLink({ name: 'Current visitors', url: '/online' })
      ]
    }),
    new MenuLink({
      name: 'Account',
      url: '/account',
      children: [
        new MenuLink({ name: 'Watched threads', url: '/threads?unread=0' }),
        new MenuLink({ name: 'Watched forums', url: '/forums' }),
        new MenuLink({ name: 'Ignored threads', url: '/threads?ignored=0' })
      ]
    })
  ];

  constructor(private authService: AuthService) {
  }
}

export class MenuLink {
  name: string = "MISSING!";
  header: boolean = false;
  url?: string = undefined;
  children: MenuLink[] = [];

  constructor(menuLink: Partial<MenuLink>) {
    Object.assign(this, menuLink);
  }
}
