import { MOCK_ME } from '@room-messages/shared/interfaces';
import { Story, Meta } from '@storybook/react';
import { MOCK_CHAT_ROOM_MESSAGES_BY_ROOM_ID } from '../../__mocks__/chat-room-message';
import { ChatRoomMessages, ChatRoomMessagesProps } from './chat-room-messages';

export default {
  component: ChatRoomMessages,
  title: 'ChatRoomMessages',
  argTypes: {},
} as Meta;

const Template: Story<ChatRoomMessagesProps> = (args) => (
  <ChatRoomMessages {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  me: MOCK_ME,
  messages: MOCK_CHAT_ROOM_MESSAGES_BY_ROOM_ID['1'],
};
