import { memo } from 'react';
import { useLocation } from 'react-router';
import { Drawer, Toolbar, List, DrawerProps } from '@mui/material';
import { ModalProps } from '@mui/material/Modal';
import clsx from 'clsx';
import Link from 'ui/link';
import NestableLinkItem from 'ui/nestable-link-item';
import { RouteInfo } from 'types/common';
import { APP_NAME } from 'constants/common';
import useStyles from './styles';

const defaultModalProps: Partial<ModalProps> = { keepMounted: true };

export const SidebarComponent: React.FC<SidebarProps> = ({
  className,
  ModalProps: modalProps = defaultModalProps,
  routes,
  showSidebar,
  toggleShowSidebar,
  variant = 'persistent',
}) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <Drawer
      classes={{ paper: clsx(classes.root, className) }}
      ModalProps={modalProps}
      open={showSidebar}
      onClose={toggleShowSidebar}
      variant={variant}
    >
      <Toolbar>
        <Link className={classes.homeLink} variant="button" to="/">
          {APP_NAME}
        </Link>
      </Toolbar>

      <List component="nav">
        {routes.map((props) => (
          <NestableLinkItem
            {...props}
            key={props.path}
            nestedLevel={0}
            pathname={pathname}
            className={classes.menuItem}
          />
        ))}
      </List>
    </Drawer>
  );
};

const Sidebar = memo(SidebarComponent);
Sidebar.displayName = 'Sidebar';
export default Sidebar;

export interface SidebarProps
  extends OmitFrom<DrawerProps, 'open' | 'onClose'> {
  showSidebar: boolean;
  toggleShowSidebar: VoidFunction;
  routes: RouteInfo[];
}
