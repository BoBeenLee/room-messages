import { todayTime } from '@room-messages/shared-utils';
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
        message="testtest"
        createdAt={todayTime()}
      />
    </ChatRoomMessageItem>
    <ChatRoomMessageItem>
      <ChatRoomMessageItem.Seperator date={todayTime()} />
    </ChatRoomMessageItem>
    <ChatRoomMessageItem>
      <ChatRoomMessageItem.MyMessage
        message="testtest"
        createdAt={todayTime()}
      />
    </ChatRoomMessageItem>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
