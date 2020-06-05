import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as moment from 'moment';
import * as range from 'lodash.range';
import { MeetingsService } from './services/meetings.service';

export interface CalendarDate {
  mDate: moment.Moment;
  selected?: boolean;
  today?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public meetingsData;
  public currentDate: moment.Moment;
  public namesOfDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  public weeks: Array<CalendarDate[]> = [];

  public selectedDate;
  public show: boolean;

  @ViewChild('calendar', { static: true }) calendar;

  constructor(
    private eRef: ElementRef,
    public meetingsService: MeetingsService
  ) {}

  ngOnInit() {
    this.meetingsService
      .getMeetingsData()
      .subscribe((data) => (this.meetingsData = data));
    this.currentDate = moment();
    this.selectedDate = moment(this.currentDate).format('DD/MM/YYYY');
    this.generateCalendar();
  }

  private generateCalendar(): void {
    const dates = this.fillDates(this.currentDate);
    const weeks = [];
    while (dates.length > 0) {
      weeks.push(dates.splice(0, 7));
    }
    this.weeks = weeks;
  }

  private fillDates(currentMoment: moment.Moment) {
    const firstOfMonth = moment(currentMoment).startOf('month').day();
    const lastOfMonth = moment(currentMoment).endOf('month').day();

    const firstDayOfGrid = moment(currentMoment)
      .startOf('month')
      .subtract(firstOfMonth, 'days');
    const lastDayOfGrid = moment(currentMoment)
      .endOf('month')
      .subtract(lastOfMonth, 'days')
      .add(7, 'days');

    const startCalendar = firstDayOfGrid.date();

    return range(
      startCalendar,
      startCalendar + lastDayOfGrid.diff(firstDayOfGrid, 'days')
    ).map((date) => {
      const newDate = moment(firstDayOfGrid).date(date);
      return {
        today: this.isToday(newDate),
        selected: this.isSelected(newDate),
        mDate: newDate,
      };
    });
  }

  public prevMonth(): void {
    this.currentDate = moment(this.currentDate).subtract(1, 'months');
    this.generateCalendar();
  }

  public nextMonth(): void {
    this.currentDate = moment(this.currentDate).add(1, 'months');
    this.generateCalendar();
  }

  private isToday(date: moment.Moment): boolean {
    return moment().isSame(moment(date), 'day');
  }

  private isSelected(date: moment.Moment): boolean {
    return this.selectedDate === moment(date).format('DD/MM/YYYY');
  }

  // TODO optimize and fix if logic
  public getMeetingsForDay(date: moment.Moment) {
    const meetingsForDay = [];
    this.meetingsData.meetings.forEach((meeting) => {
      if (moment(meeting.start).date() === moment(date).date()) {
        meetingsForDay.push({
          start: moment(meeting.start).format('HH:mm'),
          end: moment(meeting.end).format('HH:mm'),
          name: meeting.name,
          room: meeting.meetingRoom,
        });
      }
    });
    return meetingsForDay;
  }
}
