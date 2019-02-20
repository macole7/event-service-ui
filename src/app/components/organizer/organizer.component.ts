import { Component, OnInit } from '@angular/core';
import { Organizer } from 'src/app/model/organizer';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { OrganizerService } from 'src/app/services/organizer.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent implements OnInit {
  organizers: Organizer[] = new Array<Organizer>();
  displayedColumns: string[] = ['position', 'name', 'email'];
  dataSource = new MatTableDataSource<Organizer>(this.organizers);

  constructor(private router: Router, private organizerService: OrganizerService, private eventService: EventService) { }

  ngOnInit() {
    this.organizerService.getAllOrganizers()
      .subscribe(data => {
        this.organizers = data;
      });
  }

  public deleteOrganizerById(organizer: Organizer) {
    this.organizerService.deleteOrganizer(organizer.id).subscribe(data => {
      this.organizers = this.organizers.filter(o => o !== organizer);
    });
  }
}
