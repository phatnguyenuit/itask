import { FC, memo, Suspense } from 'react';
import { Navigate, Routes as RouterRoutes, Route } from 'react-router-dom';
import { RouteInfo, AuthInfo } from 'types/common';
import Spin from 'ui/spin';
import useStyles from './styles';

const flattenRoutes = (
  routes: RouteInfo[],
  isAccessible: (authInfo: AuthInfo) => boolean,
  collectedRoutes: RouteInfo[],
) => {
  routes.forEach((route) => {
    if (route.childRoutes)
      flattenRoutes(route.childRoutes, isAccessible, collectedRoutes);
    else if (isAccessible(route)) collectedRoutes.push(route);
  });
};

export const RoutesComponent: FC<RoutesProps> = ({ routes }) => {
  const classes = useStyles();
  const isAccessible = () => true;
  const allRoutes: RouteInfo[] = [];
  flattenRoutes(routes, isAccessible, allRoutes);

  return (
    <Suspense
      fallback={
        <Spin className={classes.loadingPage} loading color="secondary" />
      }
    >
      <RouterRoutes>
        {allRoutes.map(({ path, shortPath, ...props }) => (
          <Route {...props} key={path} path={shortPath} />
        ))}
        <Route path="*" element={<Navigate replace to="/not-found" />} />
      </RouterRoutes>
    </Suspense>
  );
};

const MyRoutes = memo(RoutesComponent);
MyRoutes.displayName = 'MyRoutes';
export default MyRoutes;

export interface RoutesProps {
  routes: RouteInfo[];
}
