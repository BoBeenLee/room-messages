import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './button';
import { action } from '@storybook/addon-actions';

export default {
  component: Button,
  title: 'Button',
  argTypes: {},
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: '버튼',
  onClick: action('onClick'),
};
