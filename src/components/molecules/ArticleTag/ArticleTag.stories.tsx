import { Meta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { ArticleTag, TagProps } from './ArticleTag';

const templateTag = (i: number): ArticleTag => ({
  id: `dummy-${i}`,
  name: `duumy${i}`,
  img: {
    url: 'http://placehold.jp/150x150.png',
  },
  createdAt: '2022/1/1',
  updatedAt: '2022/12/31',
});

const defaultArgs: TagProps = {
  tag: templateTag(0),
};

export default {
  component: ArticleTag,
  title: 'Molecules/ArticleTag',
} as Meta<typeof ArticleTag>;

const Template: ComponentStory<typeof ArticleTag> = (args: TagProps) => (
  <MemoryRouter initialEntries={['/', 'tag', 'fnuhudhvufj']}>
    <ArticleTag {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
