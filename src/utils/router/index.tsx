import { Top } from '@/views/Top/Top';
import { Categories } from '@/views/Categories/Categories';
import { Tags } from '@/views/Tags/Tags';
// import { Category } from '@/views/Categories/Categories';
// import { Tag } from '@/views/Tags/Tags';
import { Profile } from '@/views/Profile/Profile';
import { Article } from '@/views/Article/Article'

export const router = [
  {
    path: '/',
    exact: true,
    element: <Top />,
  },
  {
    path: '/:page',
    exact: true,
    element: <Top />,
  },
  {
    path: 'article/:id',
    exact: true,
    element: <Article />,
  },
  // {
  //   path: '/category/:id',
  //   exact: true,
  //   element: <Category />,
  // },
  // {
  //   path: '/tag/:id',
  //   exact: true,
  //   element: <Tag />,
  // },
  {
    path: '/categories',
    exact: true,
    element: <Categories />,
  },
  {
    path: '/tags',
    exact: true,
    element: <Tags />,
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
    path: '/categories',
  },
  {
    name: 'Tag',
    path: '/tags',
  },
  {
    name: 'Profile',
    path: '/profile',
  },
];
