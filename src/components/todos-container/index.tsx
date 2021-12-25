import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

import { useSearchTodosQuery } from 'shared';
import { createSelectTodos, selectErrorMessage } from 'selectors/todos';
import { fetchTodos } from 'states/todos';
import { User } from 'types/user';

import TodoWidget from '../todo-widget';

export interface TodosContainerProps {
  user: User;
}

const TodosContainer: React.FC<TodosContainerProps> = ({ user }) => {
  const todos = useSelector(createSelectTodos(user.id));
  const errorMessage = useSelector(selectErrorMessage);
  const dispatch = useDispatch();

  const { data } = useSearchTodosQuery({
    variables: {
      userId: 1,
    },
  });

  console.log('data', data);

  useEffect(() => {
    if (todos.length === 0) {
      dispatch(fetchTodos(user.id));
    }
  }, [dispatch, todos.length, user.id]);

  return (
    <Box sx={{ mt: 3 }}>
      {/* sx means using style system object (new style API from @mui/system) */}
      <Typography variant="h4">List todos of {user.name}</Typography>
      {todos.map((todo) => (
        <TodoWidget key={todo.id} todo={todo} />
      ))}
      {errorMessage && <p>{errorMessage}</p>}
    </Box>
  );
};

export default TodosContainer;
