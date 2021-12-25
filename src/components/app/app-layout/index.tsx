import { FC, memo } from 'react';
import clsx from 'clsx';

import useToggle from 'hooks/useToggle';
import useLogoutWatcher from 'hooks/auth/useLogoutWatcher';
import { sidebarRoutes, appRoutes } from 'routes';
import Routes from 'routes/components/routes';
import { RouteInfo, AuthInfo } from 'types/common';

import Sidebar from '../sidebar';
import Menubar from '../menubar';

import useStyles from './styles';

const filterAccessibleRoutes = (
  routes: RouteInfo[],
  isAccessible: (authInfo: AuthInfo) => boolean,
): RouteInfo[] =>
  routes?.filter(isAccessible).map<RouteInfo>(({ childRoutes, ...rest }) => ({
    ...rest,
    childRoutes:
      childRoutes && filterAccessibleRoutes(childRoutes, isAccessible),
  }));

export const AppLayoutComponent: FC = () => {
  const classes = useStyles();
  const [showSidebar, toggleShowSidebar] = useToggle(true);
  const isAccessible = () => true;
  const accessibleRoutes = filterAccessibleRoutes(sidebarRoutes, isAccessible);

  useLogoutWatcher();

  return (
    <div className={classes.root}>
      <Menubar
        className={clsx(classes.rightContent, {
          [classes.rightContentShift]: showSidebar,
        })}
        showSidebar={showSidebar}
        toggleShowSidebar={toggleShowSidebar}
      />
      <Sidebar
        className={classes.sidebar}
        showSidebar={showSidebar}
        toggleShowSidebar={toggleShowSidebar}
        routes={accessibleRoutes}
      />
      <div
        className={clsx(classes.appContent, classes.rightContent, {
          [classes.rightContentShift]: showSidebar,
        })}
      >
        <Routes routes={appRoutes} />
      </div>
    </div>
  );
};

const AppLayout = memo(AppLayoutComponent);
AppLayout.displayName = 'AppLayout';
export default AppLayout;
