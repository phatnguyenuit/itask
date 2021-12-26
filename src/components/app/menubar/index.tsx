import { FC, memo } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Avatar,
  MenuItem,
  ListItemIcon,
  ListItemText,
  AppBarProps,
} from '@mui/material';
import clsx from 'clsx';
import useToggle from 'hooks/useToggle';
import authService from 'services/auth';
import storageService from 'services/storage';

import ConfirmationDialog from 'ui/confirmation-dialog';
import DropdownMenu from 'ui/dropdown-menu';
import FontIcon from 'ui/font-icon';

import useStyles from './styles';

export const MenubarComponent: FC<MenubarProps> = ({
  className,
  elevation = 0,
  position = 'sticky',
  showSidebar,
  toggleShowSidebar,
  ...props
}) => {
  const classes = useStyles();
  const username = storageService.getItem<string>('username') ?? 'Unknown';
  const [showDialog, , openDialog, closeDialog] = useToggle(false);

  return (
    <AppBar
      {...props}
      className={clsx(classes.root, className)}
      elevation={elevation}
      position={position}
    >
      <Toolbar className={classes.toolbar}>
        <Button
          className={classes.toggleSidebarButton}
          onClick={toggleShowSidebar}
        >
          <FontIcon type="menu" />
        </Button>
        <div className={classes.grow} />
        <DropdownMenu
          id="profileMenu"
          toggleButton={
            <IconButton className={classes.profileButton}>
              <Avatar className={classes.avatar}>
                {username[0].toUpperCase()}
              </Avatar>
            </IconButton>
          }
        >
          {/* <MenuItem component="button" onClick={toggleChangePassword}>
            <ListItemIcon>
              <FontIcon type="vpn_key" />
            </ListItemIcon>
            <ListItemText primary="Change password" />
          </MenuItem> */}
          <MenuItem component="button" onClick={openDialog}>
            <ListItemIcon>
              <FontIcon type="exit_to_app" />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </MenuItem>
        </DropdownMenu>
      </Toolbar>
      <ConfirmationDialog
        cancelText="Cancel"
        confirmText="Logout"
        heading="Logging out"
        onCancel={closeDialog}
        onClose={closeDialog}
        onConfirm={authService.logout}
        open={showDialog}
      >
        You will be returned to the login screen.
      </ConfirmationDialog>
    </AppBar>
  );
};

const Menubar = memo(MenubarComponent);
Menubar.displayName = 'Menubar';
export default Menubar;

export interface MenubarProps extends AppBarProps {
  showSidebar: boolean;
  toggleShowSidebar: VoidFunction;
}
