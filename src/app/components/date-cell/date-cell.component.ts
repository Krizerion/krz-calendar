import { Component, OnInit, Input } from '@angular/core';
import swal from 'sweetalert2';
import * as moment from 'moment';
import {
  IGroupedMeetingsData,
  IMeeting,
  CalendarDate,
} from 'src/app/shared/models/models';
import { NO_MEETINGS_TITLE } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-date-cell',
  templateUrl: './date-cell.component.html',
  styleUrls: ['./date-cell.component.scss'],
})
export class DateCellComponent implements OnInit {
  @Input() meetingsData: IGroupedMeetingsData = {};
  @Input() day: CalendarDate;

  constructor() {}

  ngOnInit() {}

  public getMeetings(date: moment.Moment) {
    return this.getMeetingsByDate(date).map((meeting) => {
      return {
        start: moment(meeting.start).format('HH:mm'),
        end: moment(meeting.end).format('HH:mm'),
        name: meeting.name,
        room: meeting.meetingRoom,
      };
    });
  }

  getMeetingsByDate(date: moment.Moment): IMeeting[] {
    return this.meetingsData[moment(date).format('YYYY-MM-DD')] || [];
  }

  // I have chosen sweet alerts for the current modal purposes, but it doesnt support html templates
  // TODO: use modal component with HTML templates support
  openMeetingsModal(date: moment.Moment) {
    const meetings = this.getMeetingsByDate(date);
    if (meetings.length === 0) {
      swal.fire(NO_MEETINGS_TITLE);
    } else {
      const title = `Meetings for ${moment(date).format('DD MMM YYYY')}`;
      const rows = [];
      meetings.forEach((meeting) => {
        rows.push(
          `${moment(meeting.start).format('HH:mm')} - ${moment(
            meeting.end
          ).format('HH:mm')} in room ${meeting.meetingRoom}<br/>${
            meeting.name
          }<br/><hr/>`
        );
      });

      swal.fire({
        title,
        html: rows.join(''),
      });
    }
  }
}
