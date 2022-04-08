import { ReducerObject, ReducerSettings } from 'types/state';

const createReducerObject = <TName extends string, TState>({
  name,
  initialState,
  reducer,
}: ReducerSettings<TName, TState>): ReducerObject<TName, TState> => ({
  __typename: 'ReducerObject',
  name,
  initialState,
  reducer,
});

export default createReducerObject;
