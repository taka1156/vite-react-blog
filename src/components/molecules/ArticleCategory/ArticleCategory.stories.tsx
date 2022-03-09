import { Meta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router'
import { ArticleCategory, CategoryProps } from './ArticleCategory';

const defaultArgs: CategoryProps = {
  category: {
    id: 'dummy-id',
    name: 'duumyCategory',
    img: {
        url: 'http://placehold.jp/150x150.png'
    },
    createdAt: '2022/1/1',
    updatedAt: '2022/12/31'
  },
};

export default {
  component: ArticleCategory,
  title: 'Molecules/ArticleCategory',
} as Meta<typeof ArticleCategory>;

const Template: ComponentStory<typeof ArticleCategory> = (
  args: CategoryProps
) => <MemoryRouter initialEntries={['/', 'category', 'fnuhudhvufj']}><ArticleCategory {...args} /></MemoryRouter>;

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
