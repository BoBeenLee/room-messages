import { render } from '@testing-library/react';

import ChatRoomMessageAppBar from './chat-room-message-app-bar';

describe('ChatRoomMessageAppBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ChatRoomMessageAppBar />
    );
    expect(baseElement).toBeTruthy();
  });
});
