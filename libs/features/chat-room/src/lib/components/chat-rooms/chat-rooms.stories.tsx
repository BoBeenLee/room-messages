import { Story, Meta } from '@storybook/react';
import { ChatRooms, ChatRoomsProps } from './chat-rooms';
import { action } from '@storybook/addon-actions';
import { MOCK_CHAT_ROOMS } from '../../__mocks__/chat-room';

export default {
  component: ChatRooms,
  title: 'ChatRooms',
  argTypes: {},
} as Meta;

const Template: Story<ChatRoomsProps> = (args) => <ChatRooms {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  rooms: MOCK_CHAT_ROOMS,
  onNavigateTo: action('onNavigateTo'),
};
