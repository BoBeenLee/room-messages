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
      message: '감사합니다.',
      createdAt: parseDateFns('2022/07/11 04:00:00').valueOf(),
    },
    {
      id: '2',
      user: MOCK_USERS[0],
      message: '안녕하세요!',
      createdAt: parseDateFns('2022/07/12 04:00:00').valueOf(),
    },
    {
      id: '3',
      user: MOCK_USERS[0],
      message: `안녕하세요 서류지원 합격한 최예슬입니다.`,
      createdAt: todayTime(),
    },
  ],
  '2': [
    {
      id: '1',
      user: MOCK_USERS[1],
      message: '안녕하세요 서류지원 합격한 신예지입니다.',
      createdAt: parseDateFns('2022/08/11 04:00:00').valueOf(),
    },
  ],
  '3': [
    {
      id: '1',
      user: MOCK_USERS[2],
      message: '디자이너 최예슬님을 소개를 좀 부탁드리고',
      createdAt: parseDateFns('2022/08/09 04:00:00').valueOf(),
    },
  ],
  '4': [
    {
      id: '1',
      user: MOCK_USERS[3],
      message: '나도 이제 곧 포폴 준비해야하는데 나중에',
      createdAt: parseDateFns('2022/08/08 04:00:00').valueOf(),
    },
  ],
  '5': [
    {
      id: '1',
      user: MOCK_USERS[4],
      message: '안녕하세요 헬로네이쳐 UX팀장 김은지입니다.',
      createdAt: parseDateFns('2022/08/07 04:00:00').valueOf(),
    },
  ],
  '6': [
    {
      id: '1',
      user: MOCK_USERS[5],
      message: '우버에서 최근에 진행한 리디자인에 대하여',
      createdAt: parseDateFns('2022/08/06 04:00:00').valueOf(),
    },
  ],
  '7': [
    {
      id: '1',
      user: MOCK_USERS[6],
      message: `감사해요! 우버 앤드류킴님과 연락이 닿..`,
      createdAt: parseDateFns('2022/08/05 04:00:00').valueOf(),
    },
  ],
};
