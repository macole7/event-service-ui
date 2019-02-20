import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/model/event';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user';
import { ParticipationService } from 'src/app/services/participation.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  private id: number;
  user: User;
  event: Event;
  users: User[] = new Array<User>();

  constructor(private activatedRoute: ActivatedRoute, @Inject(EventService) private eventService: EventService,
    private userService: UserService, private participationService: ParticipationService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = +params.get('id');
      console.log(this.id);
      this.eventService.getEventById(this.id).subscribe(data => {
        this.event = data;
        console.log(this.event);
      });
    });
    this.userService.getAllUsers()
      .subscribe(data => {
        this.users = data;
        console.log(this.users);
      });
  }

  addUser (userId: number, event: Event) {
    this.participationService.assignUserForEvent(userId, event).subscribe(result => {
      alert('User assigned successfully!');
    });
  }
}
