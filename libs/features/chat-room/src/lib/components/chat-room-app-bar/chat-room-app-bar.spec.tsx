import { render } from '@testing-library/react';

import ChatRoomAppBar from './chat-room-app-bar';

describe('ChatRoomAppBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ChatRoomAppBar />
    );
    expect(baseElement).toBeTruthy();
  });
});
