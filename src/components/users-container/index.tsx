import { useCallback } from 'react';

import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { selectErrorMessage, selectUsers } from 'selectors/users';
import { fetchUsers } from 'states/users';
import { User } from 'types/user';

import UserWidget from '../user-widget';
import useStyles from './styles';

export interface UsersContainerProps {
  activeUser?: User;
  onClick?: (user: User) => React.MouseEventHandler<HTMLDivElement>;
}

const UsersContainer: React.FC<UsersContainerProps> = ({
  activeUser,
  onClick,
}) => {
  const classes = useStyles();
  const users = useSelector(selectUsers);
  const errorMessage = useSelector(selectErrorMessage);

  const dispatch = useDispatch();
  const handleFetchUsers = useCallback(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Button variant="contained" onClick={handleFetchUsers}>
        Fetch users
      </Button>

      <div className={classes.users}>
        {users.map((user) => (
          <UserWidget
            key={user.id}
            user={user}
            isActive={user.id === activeUser?.id}
            onClick={onClick?.(user)}
          />
        ))}
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default UsersContainer;
