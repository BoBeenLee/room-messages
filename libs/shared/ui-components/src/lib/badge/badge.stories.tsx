import { Story, Meta } from '@storybook/react';
import { Badge, BadgeProps } from './badge';

export default {
  component: Badge,
  title: 'Badge',
  argTypes: {},
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: '2',
};
