import { Story, Meta } from '@storybook/react';
import { DateText, DateTextProps } from './date-text';

export default {
  component: DateText,
  title: 'DateText',
  argTypes: {},
} as Meta;

const Template: Story<DateTextProps> = (args) => <DateText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "09:32"
};
