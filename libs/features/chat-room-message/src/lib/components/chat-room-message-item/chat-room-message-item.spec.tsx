import { render } from '@testing-library/react';

import ChatRoomMessageItem from './chat-room-message-item';

describe('ChatRoomMessageItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ChatRoomMessageItem />
    );
    expect(baseElement).toBeTruthy();
  });
});
