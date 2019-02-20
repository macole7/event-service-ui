import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../model/event';

@Injectable()
export class ParticipationService {

  private urlParam = 'http://localhost:8080/events';

  constructor(private http: HttpClient) { }

  assignUserForEvent(userId: number, event: Event): Observable<Event> {
    const url = this.urlParam + '/' + event.id + '/users/' + userId;
    console.log(url);
    return this.http.post<Event>(url, event);
  }
}
