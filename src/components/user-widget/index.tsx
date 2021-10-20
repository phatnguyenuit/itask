import clsx from 'clsx';

import { User } from 'types/user';
import useStyles from './styles';

export interface UserWidgetProps {
  user: User;
  isActive?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const UserWidget: React.FC<UserWidgetProps> = ({
  user,
  onClick,
  isActive = false,
}) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, { [classes.active]: isActive })}
      onClick={onClick}
    >
      <p>
        Name: <span>{user.name}</span>
      </p>
      <p>
        Email: <span>{user.email}</span>
      </p>
    </div>
  );
};

export default UserWidget;
