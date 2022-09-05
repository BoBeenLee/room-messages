import { Story, Meta } from '@storybook/react';
import {
  ChatRoomMessageAppBar,
  ChatRoomMessageAppBarProps,
} from './chat-room-message-app-bar';
import { action } from '@storybook/addon-actions';

export default {
  component: ChatRoomMessageAppBar,
  title: 'ChatRoomMessageAppBar',
  argTypes: {},
} as Meta;

const Template: Story<ChatRoomMessageAppBarProps> = (args) => (
  <ChatRoomMessageAppBar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  name: '사장님',
  onImagePicker: action('onImagePicker'),
  onBack: action('onBack'),
};
