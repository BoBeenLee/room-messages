import { Story, Meta } from '@storybook/react';
import { ChatRoomAppBar, ChatRoomAppBarProps } from './chat-room-app-bar';

export default {
  component: ChatRoomAppBar,
  title: 'ChatRoomAppBar',
  argTypes: {},
} as Meta;

const Template: Story<ChatRoomAppBarProps> = (args) => <ChatRoomAppBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
