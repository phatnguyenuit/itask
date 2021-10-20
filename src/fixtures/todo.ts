import { Todo } from 'types/todo';

export const createTodos = (userId: number, numOfTodos = 1) =>
  new Array(numOfTodos).fill(undefined).map<Todo>((_, index) => ({
    userId,
    id: index + 1,
    completed: Math.random() > 0.5,
    title: `Todo #${index + 1}`,
  }));
