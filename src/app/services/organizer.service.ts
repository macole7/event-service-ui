import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Organizer } from '../model/organizer';
import { Observable } from 'rxjs';

@Injectable()
export class OrganizerService {

  constructor(private http: HttpClient) { }

  private organizerUrl = 'http://localhost:8080/organizers';

  public getAllOrganizers(): Observable<Organizer[]> {
    return this.http.get<Organizer[]>(this.organizerUrl);
  }

  public deleteOrganizer(id: number): Observable<Organizer> {
    return this.http.delete<Organizer>(this.organizerUrl + '/' + id);
  }

}
