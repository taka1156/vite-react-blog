import { Meta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router'
import { ArticlePagination, PaginationProps } from './ArticlePagination';

const defaultArgs: PaginationProps = {
  pageInfo: {
    current: 0,
    maxPage: 3,
    pageKind: ''
  }
};

export default {
  component: ArticlePagination,
  title: 'Molecules/ArticlePagination',
} as Meta<typeof ArticlePagination>;

const Template: ComponentStory<typeof ArticlePagination> = (
  args: PaginationProps
) => <MemoryRouter initialEntries={['/category/fnuhudhvufj']}><ArticlePagination {...args} /></MemoryRouter>;

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
