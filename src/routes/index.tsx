import { lazy } from 'react';
import { RouteInfo } from 'types/common';
import { appPaths, authPaths } from './paths';

const Dashboard = lazy(() => import('pages/dashboard'));
const Login = lazy(() => import('pages/auth/login'));

// App Routes with links on Sidebar
export const sidebarRoutes: RouteInfo[] = [
  {
    ...appPaths.dashboard(),
    icon: 'access_alarm',
    element: <Dashboard />,
  },
];

// App Routes that don't have links on Sidebar
export const subRoutes: RouteInfo[] = [];

export const appRoutes = [...sidebarRoutes, ...subRoutes];

// Authentication Routes
export const authRoutes: RouteInfo[] = [
  {
    ...authPaths.login(),
    icon: 'access_alarm',
    element: <Login />,
  },
];
