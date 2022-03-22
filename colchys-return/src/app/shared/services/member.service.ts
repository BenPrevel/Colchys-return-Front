import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Member } from '../models/member.model';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  urlBack = environment.urlBack;

  constructor(private http: HttpClient) {}

  public getAllMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.urlBack + 'members');
  }
}
