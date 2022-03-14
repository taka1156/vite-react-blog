import { Meta, ComponentStory } from '@storybook/react';
import { Footer  } from './Footer';

export default {
  component: Footer,
  title: 'Organisms/Footer',
} as Meta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => (
  <Footer />
);

export const Default = Template.bind({});
