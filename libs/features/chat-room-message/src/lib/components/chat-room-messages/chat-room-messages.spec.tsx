import { identity } from "@room-messages/shared-utils";
import { MOCK_ME } from '@room-messages/shared/interfaces';
import { render } from '@testing-library/react';
import { MOCK_CHAT_ROOM_MESSAGES_BY_ROOM_ID } from '../../__mocks__/chat-room-message';

import ChatRoomMessages from './chat-room-messages';

describe('ChatRoomMessages', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ChatRoomMessages
        me={MOCK_ME}
        messages={MOCK_CHAT_ROOM_MESSAGES_BY_ROOM_ID['1']}
        onCancel={identity}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
