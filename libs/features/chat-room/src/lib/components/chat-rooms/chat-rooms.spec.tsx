import { identity } from '@room-messages/shared-utils';
import { render } from '@testing-library/react';
import { MOCK_CHAT_ROOMS } from '../../__mocks__/chat-room';
import ChatRooms from './chat-rooms';

describe('ChatRooms', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ChatRooms rooms={MOCK_CHAT_ROOMS} onNavigateTo={identity} />
    );
    expect(baseElement).toBeTruthy();
  });
});
