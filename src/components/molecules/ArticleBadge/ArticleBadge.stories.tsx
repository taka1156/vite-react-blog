import { Meta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { ArticleBadge, BadgeProps, BadgeType } from './ArticleBadge';


const CategoryArgs: BadgeType = {
  id: 'dummy-id',
  name: 'dummy',
  img: {
    url: 'http://placehold.jp/150x150.png',
  },
  createdAt: '2022/1/1',
  updatedAt: '2022/12/31',
};

const templateTag = (i: number): ArticleTag => ({
  id: `dummy-${i}`,
  name: `dummy${i}`,
  img: {
    url: 'http://placehold.jp/150x150.png',
  },
  createdAt: '2022/1/1',
  updatedAt: '2022/12/31',
});

const TagArgs: BadgeType = templateTag(1);

export default {
  component: ArticleBadge,
  title: 'Molecules/ArticleBadge',
} as Meta<typeof ArticleBadge>;

const Template: ComponentStory<typeof ArticleBadge> = (args: BadgeProps) => (
  <MemoryRouter initialEntries={['/category/fnuhudhvufj']}>
    <ArticleBadge {...args} />
  </MemoryRouter>
);

export const Category = Template.bind({});
Category.args = { badge: CategoryArgs, link: `category/${CategoryArgs.id}`, outlined: false };

export const Tags = Template.bind({});
Tags.args = { badge: TagArgs, link: `/tag/${TagArgs.id}` ,outlined: true };
