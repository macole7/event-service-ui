import { Component, OnInit, ViewChild } from '@angular/core';
import { OrganizerService } from 'src/app/services/organizer.service';
import { Organizer } from 'src/app/model/organizer';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/model/event';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {
  organizers: Organizer[] = new Array<Organizer>();
  event: Event = new Event();

  @ViewChild('eventForm')
  eventForm: NgForm;

  constructor(private organizerService: OrganizerService, private router: Router, private eventService: EventService) { }

  ngOnInit() {
    this.organizerService.getAllOrganizers()
      .subscribe(data => {
        this.organizers = data;
      });
  }

  save(form: NgForm) {
    this.eventService.saveEvent(form).subscribe(result => {
      alert('Event created successfully!');
    }, error => console.error(error));
    this.resetForm();
  }
  resetForm() {
    this.event = new Event();
    this.eventForm.resetForm(this.event);
  }

}
