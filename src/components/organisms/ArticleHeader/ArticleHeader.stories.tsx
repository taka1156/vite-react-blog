import { Meta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { ArticleHeader, HeaderProps } from './ArticleHeader';

const templateTag = (i: number): ArticleTag => ({
    id: `dummy-${i}`,
    name: `duumy${i}`,
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
    name: 'duumy',
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

const defaultArgs: HeaderProps = {
  article: templateArticle(1),
};

export default {
  component: ArticleHeader,
  title: 'Molecules/ArticleHeader',
} as Meta<typeof ArticleHeader>;

const Template: ComponentStory<typeof ArticleHeader> = (
  args: HeaderProps
) => <MemoryRouter initialEntries={['/', 'article', 'fnuhudhvufj']}><ArticleHeader {...args} /></MemoryRouter>;

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
