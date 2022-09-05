import { parseDateFns, todayTime } from '@room-messages/shared-utils';
import { MOCK_USERS } from '@room-messages/shared/interfaces';
import { ChatRoomMessage } from '../interfaces';

export const MOCK_CHAT_ROOM_MESSAGES_BY_ROOM_ID: Record<
  string,
  ChatRoomMessage[]
> = {
  '1': [
    {
      id: '1',
      user: MOCK_USERS[0],
      message: '출근했니?',
      createdAt: parseDateFns('2022/07/11 04:00:00').valueOf(),
    },
    {
      id: '2',
      user: MOCK_USERS[0],
      message: '출근했냐구?',
      createdAt: parseDateFns('2022/07/12 04:00:00').valueOf(),
    },
    {
      id: '3',
      user: MOCK_USERS[0],
      message: '어딘데 출근 안하니, 죽고싶니?',
      createdAt: todayTime(),
    },
  ],
  '2': [
    {
      id: '1',
      user: MOCK_USERS[1],
      message: '오시는 길에 와인 몇병만 사다주세요.',
      createdAt: parseDateFns('2022/08/11 04:00:00').valueOf(),
    },
  ],
  '3': [
    {
      id: '1',
      user: MOCK_USERS[2],
      message: '휴가 잘 보내고 계신가요? 다름이 아니라 지..',
      createdAt: parseDateFns('2022/08/09 04:00:00').valueOf(),
    },
  ],
  '4': [
    {
      id: '1',
      user: MOCK_USERS[3],
      message: '아 휴가셨군요. 약속은 다음으로 미루시죠!',
      createdAt: parseDateFns('2022/08/08 04:00:00').valueOf(),
    },
  ],
  '5': [
    {
      id: '1',
      user: MOCK_USERS[4],
      message: '휴가에서 언제 돌아오시는지요. 돌아오시면 ..',
      createdAt: parseDateFns('2022/08/07 04:00:00').valueOf(),
    },
  ],
  '6': [
    {
      id: '1',
      user: MOCK_USERS[5],
      message: '304호 키를 잃어버렸어요 어떻게 해야하죠 ㅠ',
      createdAt: parseDateFns('2022/08/06 04:00:00').valueOf(),
    },
  ],
  '7': [
    {
      id: '1',
      user: MOCK_USERS[6],
      message: '술먹자',
      createdAt: parseDateFns('2022/08/05 04:00:00').valueOf(),
    },
  ],
};
