import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {PostListComponent} from "./post/post.component";
import {FloatingMenuComponent} from "./menu/floating-menu.component";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {MenuComponent} from "./components/menu/menu.component";
import {AnnouncementComponent} from "./announcement/announcement.component";
import {BreadcrumbComponent} from "./breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PostListComponent,
    RouterLink,
    RouterLinkActive,
    FloatingMenuComponent, NgClass, MenuComponent, NgOptimizedImage, AnnouncementComponent, BreadcrumbComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-angular';
}
