import {
  durationDays,
  ONLY_WEEKDAY_FORMAT,
  TIME_FORMAT,
  toDateTimeText,
  today,
} from '@room-messages/shared-utils';

export const getChatRoomDateTime = (dateTime: number) => {
  const isToday = durationDays(new Date(dateTime), today()) === 0;
  if (isToday) {
    return toDateTimeText(dateTime, TIME_FORMAT);
  }
  return toDateTimeText(dateTime, ONLY_WEEKDAY_FORMAT);
};
