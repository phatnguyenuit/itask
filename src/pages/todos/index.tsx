import { Box, Button, Grid } from '@mui/material';

import AppContent from 'components/app/app-content';
import storageService from 'services/storage';
import { useSearchTodosLazyQuery } from 'shared';
import Todo from './components/todo';
import useStyles from './styles';

const TodosPage: React.FC = () => {
  const classes = useStyles();
  const [fetchTodos, { data }] = useSearchTodosLazyQuery({
    fetchPolicy: 'no-cache',
  });

  const handleFetchTodos = () => {
    const userId = storageService.getItem<number>('userId');

    if (!userId) return;

    fetchTodos({
      variables: {
        userId,
      },
    });
  };

  return (
    <AppContent title="Todos">
      <Box className={classes.root}>
        <Button variant="contained" onClick={handleFetchTodos}>
          Fetch todos
        </Button>
        <Grid container direction="column" className={classes.todos} gap={1}>
          {data?.searchTodos?.todos?.map((todo) => (
            <Grid item key={todo.id}>
              <Todo {...todo} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </AppContent>
  );
};

export default TodosPage;
