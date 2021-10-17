import { Button } from '@mui/material';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectUsers, selectErrorMessage } from 'selectors/users';
import { fetchUsers } from 'states/users';

import UserWidget from '../user-widget';
import useStyles from './styles';

const UsersContainer: React.FC = () => {
  const classes = useStyles();
  const users = useSelector(selectUsers);
  const errorMessage = useSelector(selectErrorMessage);

  const dispatch = useDispatch();
  const handleFetchUsers = useCallback(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h4>Users Container</h4>
      <Button variant="contained" onClick={handleFetchUsers}>
        Fetch users
      </Button>

      <div className={classes.users}>
        {users.map((user) => (
          <UserWidget key={user.id} user={user} />
        ))}
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default UsersContainer;
