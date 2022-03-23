import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Member } from '../shared/models/member.model';
import { MeetingService } from '../shared/services/meeting.service';
import { MemberService } from '../shared/services/member.service';

@Component({
  selector: 'app-meeting-form',
  templateUrl: './meeting-form.component.html',
  styleUrls: ['./meeting-form.component.css'],
})
export class MeetingFormComponent implements OnInit {
  meetingForm: FormGroup;
  members!: Member[];
  selectedgroup!: number;

  constructor(
    private formBuilder: FormBuilder,
    private meetingService: MeetingService,
    private memberService: MemberService
  ) {
    this.members = [];

    this.meetingForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      date: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      description: ['', [Validators.required]],
      memberId: ['', [Validators.required]],
    });
  }

  onConfirm() {
    this.selectedgroup.toString();
    this.meetingService.createMeeting(this.meetingForm.value).subscribe();
  }

  ngOnInit(): void {
    this.memberService.getAllMembers().subscribe((members: Member[]) => {
      members.forEach((member: Member) => {
        this.members.push(member);
      });
    });
  }
}
