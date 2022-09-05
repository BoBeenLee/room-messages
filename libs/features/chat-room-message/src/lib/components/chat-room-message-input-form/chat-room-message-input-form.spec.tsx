import { render } from '@testing-library/react';

import ChatRoomMessageInputForm from './chat-room-message-input-form';

describe('ChatRoomMessageInputForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ChatRoomMessageInputForm />
    );
    expect(baseElement).toBeTruthy();
  });
});
