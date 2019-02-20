import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/model/event';

@Component({
  selector: 'app-event-search-by-city',
  templateUrl: './event-search-by-city.component.html',
  styleUrls: ['./event-search-by-city.component.css']
})
export class EventSearchByCityComponent implements OnInit {
  address: string;
  events: Event[] = new Array<Event>();
  displayedColumns: string[] = ['position', 'name', 'date', 'address', 'organizer'];
  dataSource = new MatTableDataSource<Event>(this.events);

  constructor(private router: Router, private activatedRoute: ActivatedRoute, @Inject(EventService) private eventService: EventService) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.address = params.get('address');
      console.log(this.address);
      this.eventService.getEventByAddress(this.address).subscribe(data => {
        this.events = data;
        console.log(this.events);
      });
    });
  }

  getEventById(eventId: number) {
    this.router.navigate(['/events', eventId]);
  }
}
