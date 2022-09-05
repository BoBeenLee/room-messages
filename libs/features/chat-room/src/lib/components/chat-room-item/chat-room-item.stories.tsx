import { todayTime } from "@room-messages/shared-utils";
import { images } from '@room-messages/shared/interfaces';
import { Story, Meta } from '@storybook/react';
import { ChatRoomItem, ChatRoomItemProps } from './chat-room-item';

export default {
  component: ChatRoomItem,
  title: 'ChatRoomItem',
  argTypes: {},
} as Meta;

const Template: Story<ChatRoomItemProps> = (args) => (
  <ChatRoomItem {...args}>
    <ChatRoomItem.Profile source={images.profile} />
    <ChatRoomItem.Content>
      <ChatRoomItem.Room name="Test" updatedAt={todayTime()} />
      <ChatRoomItem.Message message="testtest" badgeCount={2} />
    </ChatRoomItem.Content>
  </ChatRoomItem>
);

export const Primary = Template.bind({});
Primary.args = {};
