import { createBrowserRouter, Outlet, RouteObject } from 'react-router-dom';

import App from '../App';

import HomePage from '../pages/home';

import WorkspacePage from '../pages/dashboard/workspace';

import AuthorListPage from '../pages/authors/author-list';

import UserListPage from '../pages/user/use-list';

import NovelListPage from '../pages/novel/noval-list';


export const routeList: RouteObject[] = [
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
        element: <Outlet/>,
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
]

const router = createBrowserRouter(routeList);
export default router;
