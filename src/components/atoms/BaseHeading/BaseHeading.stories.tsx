import { Meta, ComponentStory } from '@storybook/react';
import { BaseHeading, HeadingProps } from './BaseHeading';

const defaultArgs: HeadingProps = {
 hLv: 1,
 text: 'SampleHeading',
 underlined: false
};

export default {
  component: BaseHeading,
  title: 'Atoms/BaseHeading',
} as Meta<typeof BaseHeading>;

const Template: ComponentStory<typeof BaseHeading> = (args: HeadingProps) => (
  <BaseHeading {...args} />
);

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
