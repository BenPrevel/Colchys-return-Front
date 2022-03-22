import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meeting } from '../models/meeting.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MeetingService {
  urlBack = environment.urlBack;

  constructor(private http: HttpClient) {}

  public getAllMeetings(): Observable<Meeting[]> {
    return this.http.get<Meeting[]>(this.urlBack + 'meetings');
  }

  public createMeeting(meeting: Meeting): Observable<Meeting> {
    return this.http.post<Meeting>(this.urlBack + 'meetings', meeting);
  }

  public deleteMeeting(id: number) {
    return this.http.delete(this.urlBack + 'meetings/' + id);
  }
}
