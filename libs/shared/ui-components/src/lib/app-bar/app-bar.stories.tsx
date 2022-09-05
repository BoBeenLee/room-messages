import { Story, Meta } from '@storybook/react';
import { AppBar, AppBarProps } from './app-bar';

export default {
  component: AppBar,
  title: 'AppBar',
  argTypes: {},
} as Meta;

const Template: Story<AppBarProps> = (args) => <AppBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <AppBar>
      <AppBar.Left>Left</AppBar.Left>
      <AppBar.Content>Hello World</AppBar.Content>
      <AppBar.Right>Right</AppBar.Right>
    </AppBar>
  ),
};
