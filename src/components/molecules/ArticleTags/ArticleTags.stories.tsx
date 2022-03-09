import { Meta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { ArticleTags, TagsProps } from './ArticleTags';

const templateTag = (i: number): ArticleTag => {
  return {
    id: `dummy-${i}`,
    name: `duumyTag${i}`,
    img: {
      url: 'http://placehold.jp/150x150.png',
    },
    createdAt: '2022/1/1',
    updatedAt: '2022/12/31',
  };
};

const factory = (n: number, template: Function) => {
  return new Array(n).map((_, i) => template(i));
};

const defaultArgs: TagsProps = {
  tags: factory(5, templateTag),
};

export default {
  component: ArticleTags,
  title: 'Molecules/ArticleTags',
} as Meta<typeof ArticleTags>;

const Template: ComponentStory<typeof ArticleTags> = (args: TagsProps) => (
  <MemoryRouter initialEntries={['/', 'tag', 'fnuhudhvufj']}><ArticleTags {...args} /></MemoryRouter>
);

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
