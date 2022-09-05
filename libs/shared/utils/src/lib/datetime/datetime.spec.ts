import {
  parseDate,
  parseDateFns,
  transformDateTimeStrToText,
  toDateTimeText,
  durationDays,
  durationDaysByTime,
  todayTime,
  durationMinutesByTime,
} from './datetime';

describe('datetime', () => {
  it('parseDate', async () => {
    expect(parseDate('2010-10-01').toLocaleString()).toBe(
      new Date('2010-10-01').toLocaleString()
    );
  });
  it('parseDateFns', async () => {
    expect(parseDateFns('2010/10/01', 'yyyy/MM/dd').toLocaleDateString()).toBe(
      new Date('2010-10-01').toLocaleDateString()
    );
  });

  it('transformDateTimeStrToText', async () => {
    expect(transformDateTimeStrToText('2010/10/01', 'MMMM d, yyyy')).toBe(
      `10월 1, 2010`
    );
  });

  it('toDateTimeText', async () => {
    expect(
      toDateTimeText(new Date('2010-10-01').valueOf(), 'MMMM d, yyyy')
    ).toBe(`10월 1, 2010`);
  });

  it('durationDays', async () => {
    expect(durationDays(new Date('2010-10-01'), new Date('2010-10-02'))).toBe(
      1
    );
  });

  it('durationDaysByTime', async () => {
    expect(
      durationDaysByTime(
        new Date('2010-10-01').valueOf(),
        new Date('2010-10-02').valueOf()
      )
    ).toBe(1);
  });

  it('durationMinutesByTime', async () => {
    const oneMinutes = 60000;
    const time = todayTime();
    expect(durationMinutesByTime(time, time + oneMinutes)).toBe(1);
  });
});
