import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EventService } from './services/event.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EventComponent } from './components/event/event.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { EventAddComponent } from './components/event-add/event-add.component';
import { UserComponent } from './components/user/user.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { ParticipationComponent } from './components/participation/participation.component';
import { ParticipationAddComponent } from './components/participation-add/participation-add.component';
import { CommentComponent } from './components/comment/comment.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { OrganizerComponent } from './components/organizer/organizer.component';
import { OrganizerAddComponent } from './components/organizer-add/organizer-add.component';
import { CommentService } from './services/comment.service';
import { UserService } from './services/user.service';
import { OrganizerService } from './services/organizer.service';
import { AppRoutingModule } from './module/app-routing/app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { BootstrapModule } from './module/bootstrap/bootstrap.module';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { EventDetailComponent } from './components/event/event-detail/event-detail.component';
import { EventSearchByNameComponent } from './components/event/event-search-by-name/event-search-by-name.component';
import { HttpErrorInterceptor } from './erroer.interceptor/http-error-interceptor';
import { EventSearchByCityComponent } from './components/event/event-search-by-city/event-search-by-city.component';
import { EventSearchByDateComponent } from './components/event/event-search-by-date/event-search-by-date.component';
import { ParticipationService } from './services/participation.service';


@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventAddComponent,
    UserComponent,
    UserAddComponent,
    ParticipationComponent,
    ParticipationAddComponent,
    CommentComponent,
    AddCommentComponent,
    NavigateComponent,
    OrganizerComponent,
    OrganizerAddComponent,
    PageNotFoundComponent,
    EventDetailComponent,
    EventSearchByNameComponent,
    EventSearchByCityComponent,
    EventSearchByDateComponent,
  ],
  imports: [
    BrowserModule,
    FilterPipeModule,
    BootstrapModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,

  ],
  providers: [EventService, CommentService, UserService, OrganizerService, ParticipationService, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
