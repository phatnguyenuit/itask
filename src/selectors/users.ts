import { createSelector } from 'reselect';
import { RootState } from '../states/store';

const selectUsersState = (rootState: RootState) => rootState.users;

export const selectUsers = createSelector(
  selectUsersState,
  (state) => state.data || [],
);

export const selectErrorMessage = createSelector(
  selectUsersState,
  (state) => state.errorMsg,
);
