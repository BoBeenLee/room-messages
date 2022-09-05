import { Story, Meta } from '@storybook/react';
import { Icon, IconProps, svgIcons } from './icon';

export default {
  component: Icon,
  title: 'Icon',
  argTypes: {
    name: {
      options: [...Object.keys(svgIcons)],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<IconProps> = (args) => (
  <div style={{ width: 20, height: 20, background: '#000' }}>
    <Icon {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  name: 'upload',
};
