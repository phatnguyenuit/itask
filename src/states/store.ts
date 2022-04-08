import { PreloadedState } from 'redux';

import createStore from 'utils/state/createStore';

import helloSlice, { buildHelloState } from './hello';
import todosSlice, { buildTodosState } from './todos';
import usersSlice, { buildUsersState } from './users';

export const slices = {
  hello: helloSlice,
  users: usersSlice,
  todos: todosSlice,
};

const store = createStore(slices);

export default store;

export type RootState = ReturnType<typeof store['getState']>;

export const configureStore = (initialState?: PreloadedState<RootState>) =>
  createStore(slices, initialState);

export const buildRootState: StateBuilder<RootState> = (overrides = {}) => ({
  hello: buildHelloState(overrides.hello),
  users: buildUsersState(overrides.users),
  todos: buildTodosState(overrides.todos),
});
