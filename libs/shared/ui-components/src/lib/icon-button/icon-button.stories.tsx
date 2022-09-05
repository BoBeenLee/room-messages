import { Story, Meta } from '@storybook/react';
import { IconButton, IconButtonProps } from './icon-button';
import { action } from '@storybook/addon-actions';

export default {
  component: IconButton,
  title: 'IconButton',
  argTypes: {},
} as Meta;

const Template: Story<IconButtonProps> = (args) => (
  <div style={{ width: 20, height: 20 }}>
    <IconButton {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  name: 'upload',
  onClick: action('onClick'),
};
