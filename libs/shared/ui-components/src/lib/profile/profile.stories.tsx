import { images } from '@room-messages/shared/interfaces';
import { Story, Meta } from '@storybook/react';
import { Profile, ProfileProps } from './profile';

export default {
  component: Profile,
  title: 'Profile',
  argTypes: {},
} as Meta;

const Template: Story<ProfileProps> = (args) => <Profile {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  source: images.profile,
};
