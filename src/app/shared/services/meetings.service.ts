import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { groupBy } from 'lodash';
import * as moment from 'moment';
import { IGroupedMeetingsData, IMeeting } from '../models/models';
import { MEETINGS_DATA_RESPONSE } from '../constants/meetings-data-response';

@Injectable({
  providedIn: 'root',
})
export class MeetingsService {
  public getMeetingsData(): Observable<IGroupedMeetingsData> {
    return of(MEETINGS_DATA_RESPONSE).pipe(
      map((data) =>
        groupBy(data.meetings, (meeting: IMeeting) =>
          moment(meeting.start).startOf('day').format('YYYY-MM-DD')
        )
      )
    );
  }
}
