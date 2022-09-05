import { MOCK_CHAT_ROOMS } from '@room-messages/features-chat-room';
import { MOCK_CHAT_ROOM_MESSAGES_BY_ROOM_ID } from '@room-messages/features-chat-room-message';

export let chatRooms = [...MOCK_CHAT_ROOMS];
export let chatRoomMessages = { ...MOCK_CHAT_ROOM_MESSAGES_BY_ROOM_ID };

export const resetChatRooms = () => {
  chatRooms = [...MOCK_CHAT_ROOMS];
};

export const resetChatRoomMessages = () => {
  chatRoomMessages = { ...MOCK_CHAT_ROOM_MESSAGES_BY_ROOM_ID };
};
