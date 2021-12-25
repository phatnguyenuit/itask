import { FC, memo } from 'react';
import { MenuList } from '@mui/material';
import clsx from 'clsx';
import useDropdown from 'hooks/useDropdown';

import Dropdown, { DropdownProps } from '../dropdown';
import useStyles from './styles';

export const DropdownMenuComponent: FC<DropdownMenuProps> = ({
  children,
  popperClassName,
  ...props
}) => {
  const { anchorRef, handleClose, handleToggle, show } = useDropdown();
  const classes = useStyles({ show });

  return (
    <Dropdown
      {...props}
      anchorRef={anchorRef}
      onClose={handleClose}
      onToggle={handleToggle}
      popperClassName={clsx(classes.popper, popperClassName)}
      show={show}
    >
      <MenuList autoFocusItem={show}>{children}</MenuList>
    </Dropdown>
  );
};

const DropdownMenu = memo(DropdownMenuComponent);
DropdownMenu.displayName = 'DropdownMenu';
export default DropdownMenu;

export interface DropdownMenuProps
  extends OmitFrom<
    DropdownProps,
    'anchorRef' | 'show' | 'onToggle' | 'onClose'
  > {}
