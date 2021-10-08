import createStore from 'utils/state/createStore';
import helloSlice, { buildHelloState } from './hello';
import usersSlice, { buildUsersState } from './users';

export const slices = {
  hello: helloSlice,
  users: usersSlice,
};

const store = createStore(slices);

export default store;

export type RootState = ReturnType<typeof store['getState']>;

export const buildRootState: StateBuilder<RootState> = (overrides = {}) => ({
  hello: buildHelloState(overrides.hello),
  users: buildUsersState(overrides.users),
});
