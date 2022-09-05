import { Story, Meta } from '@storybook/react';
import { ProgressBar, ProgressBarProps } from './progress-bar';

export default {
  component: ProgressBar,
  title: 'ProgressBar',
  argTypes: {},
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  barWidth: 160,
  percents: 100,
};
