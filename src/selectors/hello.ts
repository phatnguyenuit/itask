import { createSelector } from 'reselect';
import { RootState } from '../states/store';

const selectHelloState = (rootState: RootState) => rootState.hello;

export const selectHelloMessage = createSelector(
  selectHelloState,
  (state) => state.message || 'Unknown',
);
