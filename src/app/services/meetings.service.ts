import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MeetingsService {
  public getMeetingsData(): Observable<any> {
    return of({
      meetingRooms: ['Tsarevets', 'Arbanasi'],
      meetings: [
        {
          start: '2020-06-03T11:00:00.000Z',
          end: '2020-06-03T12:00:00.000Z',
          name: 'Interview With A New Colleague',
          meetingRoom: 'Tsarevets',
          participants: [],
        },
        {
          start: '2020-06-03T14:00:00.000Z',
          end: '2020-06-03T15:30:00.000Z',
          name: 'Daily Standup',
          meetingRoom: 'Tsarevets',
          participants: [],
        },
        {
          start: '2020-06-03T12:00:00.000Z',
          end: '2020-06-03T13:00:00.000Z',
          name: 'Performance Review',
          meetingRoom: 'Tsarevets',
          participants: [],
        },
        {
          start: '2020-06-03T15:30:00.000Z',
          end: '2020-06-03T16:00:00.000Z',
          name: 'New Sprint Planning',
          meetingRoom: 'Tsarevets',
          participants: [],
        },
        {
          start: '2020-06-03T17:00:00.000Z',
          end: '2020-06-03T18:00:00.000Z',
          name: 'Happy Hour',
          meetingRoom: 'Tsarevets',
          participants: [],
        },
        {
          start: '2020-06-03T11:00:00.000Z',
          end: '2020-06-03T12:00:00.000Z',
          name: 'MVP Presentation',
          meetingRoom: 'Arbanasi',
          participants: [],
        },
        {
          start: '2020-06-03T12:00:00.000Z',
          end: '2020-06-03T13:00:00.000Z',
          name: 'Interview With A New Colleague',
          meetingRoom: 'Arbanasi',
          participants: [],
        },
        {
          start: '2020-06-03T10:00:00.000Z',
          end: '2020-06-03T10:30:00.000Z',
          name: 'Morning Coffee Meeting',
          meetingRoom: 'Arbanasi',
          participants: [],
        },
        {
          start: '2020-06-04T12:00:00.000Z',
          end: '2020-06-04T13:00:00.000Z',
          name: 'Interview With A New Colleague',
          meetingRoom: 'Tsarevets',
          participants: [],
        },
        {
          start: '2020-06-04T14:00:00.000Z',
          end: '2020-06-04T15:30:00.000Z',
          name: 'Daily Standup',
          meetingRoom: 'Tsarevets',
          participants: [],
        },
        {
          start: '2020-06-04T11:00:00.000Z',
          end: '2020-06-04T12:00:00.000Z',
          name: 'MVP Presentation',
          meetingRoom: 'Arbanasi',
          participants: [],
        },
        {
          start: '2020-06-04T10:00:00.000Z',
          end: '2020-06-04T10:30:00.000Z',
          name: 'Morning Coffee Meeting',
          meetingRoom: 'Arbanasi',
          participants: [],
        },
        {
          start: '2020-06-05T10:00:00.000Z',
          end: '2020-06-05T11:00:00.000Z',
          name: 'Presentation',
          meetingRoom: 'Tsarevets',
          participants: [],
        },
        {
          start: '2020-06-05T14:00:00.000Z',
          end: '2020-06-05T15:30:00.000Z',
          name: 'Daily Standup',
          meetingRoom: 'Tsarevets',
          participants: [],
        },
        {
          start: '2020-06-05T11:00:00.000Z',
          end: '2020-06-05T12:00:00.000Z',
          name: 'Conference Call',
          meetingRoom: 'Arbanasi',
          participants: [],
        },
        {
          start: '2020-06-05T10:00:00.000Z',
          end: '2020-06-05T10:30:00.000Z',
          name: 'Morning Coffee Meeting',
          meetingRoom: 'Arbanasi',
          participants: [],
        },
        {
          start: '2020-06-09T10:00:00.000Z',
          end: '2020-06-09T11:00:00.000Z',
          name: 'Presentation',
          meetingRoom: 'Tsarevets',
          participants: [],
        },
        {
          start: '2020-06-09T14:00:00.000Z',
          end: '2020-06-09T15:30:00.000Z',
          name: 'Daily Standup',
          meetingRoom: 'Tsarevets',
          participants: [],
        },
        {
          start: '2020-06-09T11:00:00.000Z',
          end: '2020-06-09T12:00:00.000Z',
          name: 'Conference Call',
          meetingRoom: 'Arbanasi',
          participants: [],
        },
        {
          start: '2020-06-09T10:00:00.000Z',
          end: '2020-06-09T10:30:00.000Z',
          name: 'Morning Coffee Meeting',
          meetingRoom: 'Arbanasi',
          participants: [],
        },
        {
          start: '2020-06-10T10:00:00.000Z',
          end: '2020-06-10T11:00:00.000Z',
          name: 'Presentation',
          meetingRoom: 'Tsarevets',
          participants: [],
        },
        {
          start: '2020-06-10T14:00:00.000Z',
          end: '2020-06-10T15:30:00.000Z',
          name: 'Daily Standup',
          meetingRoom: 'Tsarevets',
          participants: [],
        },
        {
          start: '2020-06-10T11:00:00.000Z',
          end: '2020-06-10T12:00:00.000Z',
          name: 'Conference Call',
          meetingRoom: 'Arbanasi',
          participants: [],
        },
        {
          start: '2020-06-10T10:00:00.000Z',
          end: '2020-06-10T10:30:00.000Z',
          name: 'Morning Coffee Meeting',
          meetingRoom: 'Arbanasi',
          participants: [],
        },
      ],
    });
  }
}
