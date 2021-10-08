import usersSlice, { initialState } from './users';

describe('usersSlice', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return loading=true when fetching users', () => {
    const action = usersSlice.actions.fetchUsers();
    const nextState = usersSlice.reducer(initialState, action);

    expect(nextState.loading).toEqual(true);
    expect(nextState.data).toEqual(undefined);
    expect(nextState.errorMsg).toEqual(undefined);
  });

  it('should set users when fetched users successfully', () => {
    const action = usersSlice.actions.fetchUsersSuccess([]);
    const nextState = usersSlice.reducer(initialState, action);

    expect(nextState.loading).toEqual(false);
    expect(nextState.data).toEqual([]);
    expect(nextState.errorMsg).toEqual(undefined);
  });

  it('should set error message when fetched failed', () => {
    const action = usersSlice.actions.fetchUsersFail('Failed to fetch');
    const nextState = usersSlice.reducer(initialState, action);

    expect(nextState.loading).toEqual(false);
    expect(nextState.data).toEqual(undefined);
    expect(nextState.errorMsg).toEqual('Failed to fetch');
  });
});
