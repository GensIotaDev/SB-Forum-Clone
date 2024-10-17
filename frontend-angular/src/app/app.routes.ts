import { Routes } from '@angular/router';
import {ForumComponent} from "./forum";
import {ThreadComponent} from "./thread/thread.component";
import {EditThreadComponent} from "./thread/edit-thread.component";
import {UserComponent} from "./components";
import {LatestActivityComponent} from "./components/users/latest-activity.component";
import {LoginComponent} from "./user";
import {HomeComponent} from "./home/home.component";
import {PageNotFoundComponent} from "./errors";
import {ForumCreateComponent} from "./forum/components/forum-create.component";
import {ForumPageComponent} from "./forum/components/forum-page.component";

export const routes: Routes = [
  { path: 'forums/create', component: ForumCreateComponent },
  { path: 'forums/:id/create-thread', component: EditThreadComponent },
  {
    path: 'forums/:pid',
    component: ForumComponent,
    children: [
      { path: ':ppage', component: ForumPageComponent },
      { path: '', component: ForumPageComponent, pathMatch: 'full' }
    ]
  },
  {
    path: 'threads/:pid',
    component: ThreadComponent,
    children: [
      //{ path: ':page', component: PagedListComponent<any> }
    ]
  },
  {
    path: 'login',
    children: [
      { path: '', component: LoginComponent },
      //{ path: 'register', component: RegisterComponent },
      //{ path: 'lost-password', component: PasswordResetComponent }
    ]
  },
  {
    path: 'users/:id',
    component: UserComponent,
    children: [
      { path: 'latest-activity', component: LatestActivityComponent }
    ]
  },
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];
