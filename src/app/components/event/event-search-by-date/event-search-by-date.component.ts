import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/model/event';

@Component({
  selector: 'app-event-search-by-date',
  templateUrl: './event-search-by-date.component.html',
  styleUrls: ['./event-search-by-date.component.css']
})
export class EventSearchByDateComponent implements OnInit {
  date: string;
  events: Event[] = new Array<Event>();
  displayedColumns: string[] = ['position', 'name', 'date', 'address', 'organizer'];
  dataSource = new MatTableDataSource<Event>(this.events);

  constructor(private router: Router, private activatedRoute: ActivatedRoute, @Inject(EventService) private eventService: EventService) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.date = params.get('date');
      console.log(this.date);
      this.eventService.getEventByDate(this.date).subscribe(data => {
        this.events = data;
        console.log(this.events);
      });
    });
  }

  getEventById(eventId: number) {
    this.router.navigate(['/events', eventId]);
  }
}
