import { todayTime } from '@room-messages/shared-utils';
import { MOCK_ME } from '@room-messages/shared/interfaces';
import { Story, Meta } from '@storybook/react';
import {
  ChatRoomMessageItem,
  ChatRoomMessageItemProps,
} from './chat-room-message-item';

export default {
  component: ChatRoomMessageItem,
  title: 'ChatRoomMessageItem',
  argTypes: {},
} as Meta;

const Template: Story<ChatRoomMessageItemProps> = (args) => (
  <div>
    <ChatRoomMessageItem>
      <ChatRoomMessageItem.UserMessage
        user={MOCK_ME}
        message="testtest"
        createdAt={todayTime()}
      />
    </ChatRoomMessageItem>
    <ChatRoomMessageItem>
      <ChatRoomMessageItem.Seperator date={todayTime()} />
    </ChatRoomMessageItem>
    <ChatRoomMessageItem>
      <ChatRoomMessageItem.MyMessage
        user={MOCK_ME}
        message="testtest"
        createdAt={todayTime()}
      />
    </ChatRoomMessageItem>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
