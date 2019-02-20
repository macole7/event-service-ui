import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/model/event';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-event-search-by-name',
  templateUrl: './event-search-by-name.component.html',
  styleUrls: ['./event-search-by-name.component.css']
})
export class EventSearchByNameComponent implements OnInit {
  name: string;
  events: Event[] = new Array<Event>();
  displayedColumns: string[] = ['position', 'name', 'date', 'address', 'organizer'];
  dataSource = new MatTableDataSource<Event>(this.events);

  constructor(private router: Router, private activatedRoute: ActivatedRoute, @Inject(EventService) private eventService: EventService) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.name = params.get('name');
      console.log(this.name);
      this.eventService.getEventByName(this.name).subscribe(data => {
        this.events = data;
        console.log(this.events);
      });
    });
  }

  getEventById(eventId: number) {
    this.router.navigate(['/events', eventId]);
  }
}


