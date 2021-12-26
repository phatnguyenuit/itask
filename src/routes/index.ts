import { lazy } from 'react';
import { RouteInfo } from 'types/common';
import { appPaths, authPaths } from './paths';

// App Routes with links on Sidebar
export const sidebarRoutes: RouteInfo[] = [
  {
    ...appPaths.dashboard(),
    icon: 'dashboard',
    component: lazy(() => import('pages/dashboard')),
  },
];

// App Routes that don't have links on Sidebar
export const subRoutes: RouteInfo[] = [];

export const appRoutes = [...sidebarRoutes, ...subRoutes];

// Authentication Routes
export const authRoutes: RouteInfo[] = [
  {
    ...authPaths.login(),
    component: lazy(() => import('pages/auth/login')),
  },
];
