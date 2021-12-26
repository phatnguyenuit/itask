import { Grid, Typography, Checkbox, Box, TextField } from '@mui/material';
import { ChangeEvent, KeyboardEvent, useState, useEffect } from 'react';

import { Todo as TodoModel, useUpdateTodoMutation } from 'shared';

const Todo: React.FC<TodoModel> = ({
  id,
  title: defaultTitle,
  isCompleted: defaultIsCompleted,
}) => {
  const [title, setTitle] = useState(defaultTitle);
  const [isCompleted, setIsCompleted] = useState(defaultIsCompleted);
  const [isEditable, setIsEditable] = useState(false);
  const [updateTodo, { loading, data }] = useUpdateTodoMutation();

  const handleDoubleClick = () => {
    setIsEditable(true);
  };

  const handleChangeIsCompleted = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;

    updateTodo({
      variables: {
        updateTodoId: id,
        payload: {
          isCompleted: isChecked,
        },
      },
    });
  };

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleUpdateTitle = () => {
    updateTodo({
      variables: {
        updateTodoId: id,
        payload: {
          title,
        },
      },
    }).then(() => {
      setIsEditable(false);
    });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const key = event.key;

    if (key === 'Enter') {
      handleUpdateTitle();
    }
  };

  useEffect(() => {
    if (data) {
      setIsCompleted(data.updateTodo.isCompleted);
    }
  }, [data]);

  return (
    <Grid container alignItems="center">
      <Grid item justifyContent="center">
        <Checkbox
          checked={isCompleted}
          disabled={loading}
          onChange={handleChangeIsCompleted}
        />
      </Grid>
      <Grid item>
        <Box onDoubleClick={handleDoubleClick}>
          {!isEditable && <Typography>{title}</Typography>}
          {isEditable && (
            <TextField
              fullWidth
              value={title}
              onChange={handleChangeTitle}
              onBlur={handleUpdateTitle}
              onKeyDown={handleKeyDown}
            />
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Todo;
