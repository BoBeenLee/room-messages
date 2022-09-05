import { MOCK_CHAT_ROOM_MESSAGES_BY_ROOM_ID } from '@room-messages/features-chat-room-message';
import { MOCK_USERS } from '@room-messages/shared/interfaces';
import { ChatRoom } from '../interfaces';

export const MOCK_CHAT_ROOMS: ChatRoom[] = [
  {
    id: '1',
    user: MOCK_USERS[0],
    lastestMessage: MOCK_CHAT_ROOM_MESSAGES_BY_ROOM_ID['1'][MOCK_CHAT_ROOM_MESSAGES_BY_ROOM_ID['1'].length - 1],
    unreadCount: 2,
  },
  {
    id: '2',
    user: MOCK_USERS[1],
    lastestMessage: MOCK_CHAT_ROOM_MESSAGES_BY_ROOM_ID['2'][0],
    unreadCount: 0,
  },
  {
    id: '3',
    user: MOCK_USERS[2],
    lastestMessage: MOCK_CHAT_ROOM_MESSAGES_BY_ROOM_ID['3'][0],
    unreadCount: 0,
  },
  {
    id: '4',
    user: MOCK_USERS[3],
    lastestMessage: MOCK_CHAT_ROOM_MESSAGES_BY_ROOM_ID['4'][0],
    unreadCount: 0,
  },
  {
    id: '5',
    user: MOCK_USERS[4],
    lastestMessage: MOCK_CHAT_ROOM_MESSAGES_BY_ROOM_ID['5'][0],
    unreadCount: 0,
  },
  {
    id: '6',
    user: MOCK_USERS[5],
    lastestMessage: MOCK_CHAT_ROOM_MESSAGES_BY_ROOM_ID['6'][0],
    unreadCount: 0,
  },
  {
    id: '7',
    user: MOCK_USERS[6],
    lastestMessage: MOCK_CHAT_ROOM_MESSAGES_BY_ROOM_ID['7'][0],
    unreadCount: 0,
  },
];
