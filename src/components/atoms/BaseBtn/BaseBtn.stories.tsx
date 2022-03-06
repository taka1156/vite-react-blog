import { Meta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BaseBtn, BtnProps } from './BaseBtn';

const defaultArgs: BtnProps = {
  type: 'button',
  text: 'button',
  fn: () => action('ignite'),
  outlined: false,
  size: 'small',
};

export default {
  component: BaseBtn,
  title: 'Atoms/BaseBtn',
  argTypes: {
    type: { controle: { type: 'inline-radio', options: ['button', 'submit'] } },
    text: 'button',
    outlined: {
      controle: {
        type: 'boolean',
      },
    },
  },
  args: {
    fn: () => action('ignite'),
  },
} as Meta<typeof BaseBtn>;

const Template: ComponentStory<typeof BaseBtn> = (args: BtnProps) => (
  <BaseBtn {...args} />
);

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
