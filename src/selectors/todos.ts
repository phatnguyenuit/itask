import { createSelector } from 'reselect';

import { RootState } from '../states/store';

const selectTodosState = (rootState: RootState) => rootState.todos;

export const selectErrorMessage = createSelector(
  selectTodosState,
  (state) => state.errorMsg,
);

export const createSelectTodos = (userId: number) =>
  createSelector(selectTodosState, (state) => state.data?.[userId] || []);
