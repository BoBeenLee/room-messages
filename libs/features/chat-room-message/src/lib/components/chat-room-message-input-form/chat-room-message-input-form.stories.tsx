import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import {
  ChatRoomMessageInputForm,
  ChatRoomMessageInputFormProps,
} from './chat-room-message-input-form';

export default {
  component: ChatRoomMessageInputForm,
  title: 'ChatRoomMessageInputForm',
  argTypes: {},
} as Meta;

const Template: Story<ChatRoomMessageInputFormProps> = (args) => (
  <ChatRoomMessageInputForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  onSubmit: action('onSubmit'),
};
