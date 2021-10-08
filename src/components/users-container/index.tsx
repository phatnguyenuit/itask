import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectUsers, selectErrorMessage } from 'selectors/users';
import { fetchUsers } from 'states/users';

import UserWidget from '../user-widget';
import classes from './styles.module.css';

const UsersContainer: React.FC = () => {
  const users = useSelector(selectUsers);
  const errorMessage = useSelector(selectErrorMessage);

  const dispatch = useDispatch();
  const handleFetchUsers = useCallback(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h4>UsersContainer</h4>
      <button onClick={handleFetchUsers}>Fetch users</button>

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
