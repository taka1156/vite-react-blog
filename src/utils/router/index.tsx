import { Top } from '@/views/Top/Top';
import { Category } from '@/views/Category/Category';
import { Tag } from '@/views/Tag/Tag';
import { Profile } from '@/views/Profile/Profile';

export const router = [
  {
    path: '/',
    exact: true,
    element: <Top />,
  },
  {
    path: '/category',
    exact: true,
    element: <Category />,
  },
  {
    path: '/tag',
    exact: true,
    element: <Tag />,
  },
  {
    path: '/profile',
    exact: true,
    element: <Profile />,
  },
];

export const routesNav = [
  {
    name: 'Top',
    path: '/',
  },
  {
    name: 'Category',
    path: '/category',
  },
  {
    name: 'Tag',
    path: '/tag',
  },
  {
    name: 'Profile',
    path: '/profile',
  },
];
