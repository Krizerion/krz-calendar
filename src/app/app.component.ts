import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import * as range from 'lodash.range';
import { MeetingsService } from './shared/services/meetings.service';
import { DAYS_OF_WEEK_NAMES } from './shared/constants/constants';
import { IGroupedMeetingsData, CalendarDate } from './shared/models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public meetingsData: IGroupedMeetingsData;
  public currentDate: moment.Moment;
  public selectedDate: string;
  public namesOfDays = DAYS_OF_WEEK_NAMES;
  public weeks: Array<CalendarDate[]> = [];

  constructor(public meetingsService: MeetingsService) {}

  ngOnInit(): void {
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

  private fillDates(currentMoment: moment.Moment): CalendarDate[] {
    // Get the day which the calendar grid will start with and the day which it will end with.
    const firstOfMonth = moment(currentMoment).startOf('month').day();
    const lastOfMonth = moment(currentMoment).endOf('month').day();

    /*
    FirstDayOfGrid gets the first day of a month and subtracts its index.
    For example, if the first day of a month will start on Tuesday, the index will be equal to 2.
    And when we subtract from the first day that index we will get Sunday (our week starts from Sunday).
    LastDayOfGrid gets last Sunday of the grid and adds 7 days to find the last day of the grid, that means Saturday.
    */
    const firstDayOfGrid = moment(currentMoment)
      .startOf('month')
      .subtract(firstOfMonth, 'days');
    const lastDayOfGrid = moment(currentMoment)
      .endOf('month')
      .subtract(lastOfMonth, 'days')
      .add(7, 'days');

    // a numerical value of the first day of the grid.
    const startCalendar = firstDayOfGrid.date();

    // We create a dynamic range from the index of first day to a number that contains
    // an amount of all days in the grid + index of first day.
    // For example, if firstDayOfGrid is 29 Sep and lastDayOfGrid is 2 Nov, we’ll get range(29, 29 + 35)
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
}
