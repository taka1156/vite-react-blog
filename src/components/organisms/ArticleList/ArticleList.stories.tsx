import { Meta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { ArticleList, ListProps } from './ArticleList';

const templateTag = (i: number): ArticleTag => ({
  id: `dummy-${i}`,
  name: `duumyTag${i}`,
  img: {
    url: 'http://placehold.jp/150x150.png',
  },
  createdAt: '2022/1/1',
  updatedAt: '2022/12/31',
});

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

const templateArticle = (i: number) => ({
  id: i,
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
  return [...new Array(n)].map((_, i) => tamplate(i));
};

const defaultArgs: ListProps = {
  articleList: factory(5, templateArticle),
};

export default {
  component: ArticleList,
  title: 'Molecules/ArticleList',
} as Meta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args: ListProps) => (
  <MemoryRouter initialEntries={['/', 'article']}><ArticleList {...args} /></MemoryRouter>
);

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
