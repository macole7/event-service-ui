import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/model/event';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';



@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events: Event[] = new Array<Event>();
  foundEvents: Event[] = new Array<Event>();
  eventName = '';
  eventAddress = '';
  eventDate = '';
  displayedColumns: string[] = ['position', 'name', 'date', 'address', 'organizer', 'action'];
  dataSource = new MatTableDataSource<Event>(this.events);

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getAllEvents()
      .subscribe(data => {
        this.events = data;
      });
  }

  deleteEvent(event: Event): void {
    this.eventService.deleteEvent(event.id)
      .subscribe(data => {
        this.events = this.events.filter(e => e !== event);
      });
  }

  getEventById(eventId: number) {
    this.router.navigate(['/events', eventId]);
  }

  getEventByName(eventName: string) {
    this.router.navigate(['/event/name'], { queryParams: { name: eventName } });
    console.log(eventName);
  }

  getEventByAddress(eventAddress: string) {
    this.router.navigate(['/event/address'], { queryParams: { address: eventAddress } });
    console.log(eventAddress);
  }

  getEventByDate(eventDate: string) {
    this.router.navigate(['/event/date'], { queryParams: { date: eventDate } });
    console.log(eventDate);
  }
}
