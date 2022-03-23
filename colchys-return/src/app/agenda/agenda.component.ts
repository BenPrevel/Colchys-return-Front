import { Component, OnInit } from '@angular/core';
import { Meeting } from '../shared/models/meeting.model';
import { MeetingService } from '../shared/services/meeting.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
})
export class AgendaComponent implements OnInit {
  meetings: Meeting[];

  constructor(private meetingService: MeetingService) {
    this.meetings = [];
  }

  ngOnInit(): void {
    this.meetingService.getAllMeetings().subscribe({
      next: (data) => {
        this.meetings = data;
      },
    });
  }
}
