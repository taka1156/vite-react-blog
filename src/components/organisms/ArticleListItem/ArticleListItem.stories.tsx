import { Meta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { ArticleListItem, ListItemProps } from './ArticleListItem';

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

const dummyMarkdown = `
## この文章はダミーです。
  **文字の大きさ、量、字間、行間等を確認するために入れています。** 
## この文章はダミーです。 
  **文字の大きさ、量、字間、行間等を確認するために入れています。** 
## この文章はダミーです。 
  **文字の大きさ、量、字間、行間等を確認するために入れています。**
## この文章はダミーです。
  **文字の大きさ、量、字間、行間等を確認するために入れています。**
## この文章はダミーです。
  **文字の大きさ、量、字間、行間等を確認するために入れています。**
`;

const templateArticle = (i: number):Article => ({
  id: `article-${i}`,
  createdAt: '2022/1/1',
  updatedAt: '2022/12/31',
  title: `この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。${i}`,
  summary:
    'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量',
  body: dummyMarkdown,
  tags: factory(5, templateTag),
  category: {
    id: 'dummy-id',
    name: 'duumyTag',
    img: {
      url: 'http://placehold.jp/150x150.png',
    },
    createdAt: '2022/1/1',
    updatedAt: '2022/12/31',
  },
});

const factory = (n: number, tamplate: Function) => {
  return new Array(n).map((_, i) => tamplate(i));
};

const defaultArgs: ListItemProps = {
  article: templateArticle(1),
};

export default {
  component: ArticleListItem,
  title: 'Molecules/ArticleList',
} as Meta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (
  args: ListItemProps
) => <MemoryRouter initialEntries={['/', 'article', 'fnuhudhvufj']}><ArticleListItem {...args} /></MemoryRouter>;

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
