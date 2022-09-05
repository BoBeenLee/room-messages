import { images } from '@room-messages/shared/interfaces';
import { Story, Meta } from '@storybook/react';
import { Image, ImageProps } from './image';

export default {
  component: Image,
  title: 'Image',
  argTypes: {},
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: images.profile,
  width: 200,
  height: 200,
  objectFit: 'contain',
  layout: 'fixed',
};
