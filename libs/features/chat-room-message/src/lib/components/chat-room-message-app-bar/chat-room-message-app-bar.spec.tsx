import { render } from '@testing-library/react';

import ChatRoomMessageAppBar from './chat-room-message-app-bar';

describe('ChatRoomMessageAppBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ChatRoomMessageAppBar name="최예슬" />
    );
    expect(baseElement).toBeTruthy();
  });
});
