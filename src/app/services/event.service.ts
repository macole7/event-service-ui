import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Event } from '../model/event';
import { Observable } from 'rxjs';

@Injectable()
export class EventService {

  constructor(private http: HttpClient) { }

  private eventUrl = 'http://localhost:8080/events';

  public getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventUrl);
  }

  public deleteEvent(id: number): Observable<Event> {
    return this.http.delete<Event>(this.eventUrl + '/' + id);
  }

  public saveEvent(event: any): Observable<Event> {
    return this.http.post<Event>(this.eventUrl, event);
  }

  public getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(this.eventUrl + '/' + id);
  }

  public getEventByName(eventName: string): Observable<Event[]> {
    const urlParam = this.eventUrl + '/name?name=' + eventName;
    console.log(urlParam);
    return this.http.get<Event[]>(urlParam);
  }

  public getEventByAddress(eventAddress: string): Observable<Event[]> {
    const urlParam = this.eventUrl + '/address?address=' + eventAddress;
    console.log(urlParam);
    return this.http.get<Event[]>(urlParam);
  }

  public getEventByDate(eventAddress: string): Observable<Event[]> {
    const urlParam = this.eventUrl + '/date?date=' + eventAddress;
    console.log(urlParam);
    return this.http.get<Event[]>(urlParam);
  }

  public getEventByNameAndAddressAndDate(eventName: string, eventAddress: string, eventDate: string): Observable<Event[]> {
    const url = this.eventUrl + '/name?name=' + eventName + '&address?address=' + eventAddress + '&date?date=' + eventDate;
    console.log(url);
    return this.http.get<Event[]>(url);
  }

}
