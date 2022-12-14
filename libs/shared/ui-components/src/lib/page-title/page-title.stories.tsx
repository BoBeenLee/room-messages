import { Story, Meta } from '@storybook/react';
import { PageTitle, PageTitleProps } from './page-title';

export default {
  component: PageTitle,
  title: 'PageTitle',
  argTypes: {},
} as Meta;

const Template: Story<PageTitleProps> = (args) => <PageTitle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "최예슬"
};
