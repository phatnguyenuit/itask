import createStore from 'utils/state/createStore';
import helloSlice, { buildHelloState } from './hello';

const store = createStore({ hello: helloSlice });

export default store;
export type RootState = ReturnType<typeof store['getState']>;

export const buildRootState: StateBuilder<RootState> = (overrides = {}) => ({
  hello: buildHelloState(overrides.hello),
});
