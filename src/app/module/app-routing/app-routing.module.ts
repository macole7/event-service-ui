import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from 'src/app/components/event/event.component';
import { EventAddComponent } from 'src/app/components/event-add/event-add.component';
import { UserComponent } from 'src/app/components/user/user.component';
import { UserAddComponent } from 'src/app/components/user-add/user-add.component';
import { CommentComponent } from 'src/app/components/comment/comment.component';
import { OrganizerComponent } from 'src/app/components/organizer/organizer.component';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { EventDetailComponent } from 'src/app/components/event/event-detail/event-detail.component';
import { EventSearchByNameComponent } from 'src/app/components/event/event-search-by-name/event-search-by-name.component';
import { EventSearchByCityComponent } from 'src/app/components/event/event-search-by-city/event-search-by-city.component';
import { EventSearchByDateComponent } from 'src/app/components/event/event-search-by-date/event-search-by-date.component';

const appRoutes: Routes = [
  { path: 'events', component: EventComponent },
  { path: 'events-add', component: EventAddComponent },
  { path: 'users', component: UserComponent },
  { path: 'users-add', component: UserAddComponent },
  { path: 'comments', component: CommentComponent },
  { path: 'organizers', component: OrganizerComponent },
  { path: 'event/name', component: EventSearchByNameComponent },
  { path: 'event/address', component: EventSearchByCityComponent},
  { path: 'event/date', component: EventSearchByDateComponent},
  { path: 'events/:id', component: EventDetailComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];




@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
