import React from 'react';

import { Todo } from 'types/todo';

import useStyles from './styles';

export interface TodoWidgetProps {
  todo: Todo;
}

const TodoWidget: React.FC<TodoWidgetProps> = ({ todo }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input
        disabled
        id={`todo-${todo.id}`}
        type="checkbox"
        defaultChecked={todo.completed}
      />
      <label htmlFor={`todo-${todo.id}`}>{todo.title}</label>
    </div>
  );
};

export default TodoWidget;
