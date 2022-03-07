import { Meta, ComponentStory } from '@storybook/react';
import { BaseImg, ImgProps } from './BaseImg';

const defaultArgs: ImgProps = {
  img: 'http://placehold.jp/150x150.pn',
  alt: 'ダミー画像',
  size: 'sm',
};

export default {
  component: BaseImg,
  title: 'Atoms/BaseImg',
} as Meta<typeof BaseImg>;

const Template: ComponentStory<typeof BaseImg> = (args: ImgProps) => (
  <BaseImg {...args} />
);

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
