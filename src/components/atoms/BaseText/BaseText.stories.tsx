import { Meta, ComponentStory } from '@storybook/react';
import { BaseText, TextProps } from './BaseText';

const defaultArgs: TextProps = {
 text: 'SampleText',
};

export default {
  component: BaseText,
  title: 'Atoms/BaseText',
} as Meta<typeof BaseText>;

const Template: ComponentStory<typeof BaseText> = (args: TextProps) => (
  <BaseText {...args} />
);

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
