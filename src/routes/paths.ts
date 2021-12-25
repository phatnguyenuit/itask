import { createPaths } from 'utils/routes/paths';

export const authPaths = createPaths('auth', {
  login: {
    title: 'Login',
    path: (redirectTo?: string) =>
      redirectTo ? `login?redirect=${redirectTo}` : `login`,
  },
});

export const appPaths = createPaths('app', {
  dashboard: {
    title: 'Dashboard',
  },
});
