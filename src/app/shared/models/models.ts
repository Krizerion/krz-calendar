export interface IMeetingsDataResponse {
  meetingRooms: string[];
  meetings: IMeeting[];
}

export interface IMeeting {
  start: string;
  end: string;
  name: string;
  meetingRoom: string;
  participants: [];
}

export interface IGroupedMeetingsData {
  [key: string]: IMeeting[];
}

export interface CalendarDate {
  mDate: moment.Moment;
  selected?: boolean;
  today?: boolean;
}
