import { todayTime } from '@room-messages/shared-utils';
import { images } from '@room-messages/shared/interfaces';
import { render } from '@testing-library/react';

import ChatRoomItem from './chat-room-item';

describe('ChatRoomItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ChatRoomItem>
        <ChatRoomItem.Profile source={images.profile} />
        <ChatRoomItem.Content>
          <ChatRoomItem.Room name="Test" updatedAt={todayTime()} />
          <ChatRoomItem.Message message="testtest" badgeCount={2} />
        </ChatRoomItem.Content>
      </ChatRoomItem>
    );
    expect(baseElement).toBeTruthy();
  });
});
