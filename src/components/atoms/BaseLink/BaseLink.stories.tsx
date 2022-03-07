import { Meta, ComponentStory } from '@storybook/react';
import { BaseLink, LinkProps } from './BaseLink';

const defaultArgs: LinkProps = {
 cp: (<>SampleLink</>),
 link: 'https://example.com'
};

export default {
  component: BaseLink,
  title: 'Atoms/BaseLink',
} as Meta<typeof BaseLink>;

const Template: ComponentStory<typeof BaseLink> = (args: LinkProps) => (
  <BaseLink {...args} />
);

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
