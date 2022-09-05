import { Story, Meta } from '@storybook/react';
import { TextInput, TextInputProps } from './text-input';

export default {
  component: TextInput,
  title: 'TextInput',
  argTypes: {},
} as Meta;

const Template: Story<TextInputProps> = (args) => {
  const { placeholder } = args;
  return <TextInput placeholder={placeholder} />;
};

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'TextInput',
};
