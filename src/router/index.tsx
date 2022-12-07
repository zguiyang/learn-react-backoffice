import { createBrowserRouter, redirect } from 'react-router-dom';

import App from '../App';

import HomePage from '../pages/home';

import WorkspacePage from '../pages/dashboard/workspace';

import AuthorListPage from '../pages/authors/author-list';

import UserListPage from '../pages/user/use-list';

import NovelListPage from '../pages/novel/noval-list';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: 'dashboard',
        children: [
          {
            path: 'workspace',
            element: <WorkspacePage />,
          },
        ],
      },
      {
        path: 'authors',
        element: <AuthorListPage />,
      },
      {
        path: 'novel',
        element: <NovelListPage />,
      },
      {
        path: 'user',
        element: <UserListPage />
      }
    ],
  }
]);
export default router;
