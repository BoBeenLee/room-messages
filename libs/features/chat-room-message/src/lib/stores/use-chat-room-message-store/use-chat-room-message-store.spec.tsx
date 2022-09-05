import { useChatRoomMessageStore } from './use-chat-room-message-store';
import { MOCK_CHAT_ROOM_MESSAGES_BY_ROOM_ID } from '../../__mocks__/chat-room-message';
import { images } from '@room-messages/shared/interfaces';

describe('useChatRoomMessageStore', () => {
  beforeEach(() => {
    const { getState } = useChatRoomMessageStore;
    getState().reset();
  });

  test('should empty messages', () => {
    const { getState } = useChatRoomMessageStore;
    expect(getState().chatRoomMessages.length).toEqual(0);
  });

  test('should has messages list one', () => {
    const { getState } = useChatRoomMessageStore;
    getState().addChatRoomMessage({
      ...MOCK_CHAT_ROOM_MESSAGES_BY_ROOM_ID['1'][0],
    });
    expect(getState().chatRoomMessages.length).toEqual(1);
  });

  test('remove messsage id', () => {
    const { getState } = useChatRoomMessageStore;
    getState().addChatRoomMessage({
      ...MOCK_CHAT_ROOM_MESSAGES_BY_ROOM_ID['1'][0],
    });
    getState().removeChatRoomMessageByMessageId(
      MOCK_CHAT_ROOM_MESSAGES_BY_ROOM_ID['1'][0].id
    );
    expect(getState().chatRoomMessages.length).toEqual(0);
  });
});
