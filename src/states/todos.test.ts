import todosSlice, { initialState } from './todos';

describe('todosSlice', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return loading=true when fetching todos', () => {
    const action = todosSlice.actions.fetchTodos(1);
    const nextState = todosSlice.reducer(initialState, action);

    expect(nextState.loading).toEqual(true);
    expect(nextState.data).toEqual(undefined);
    expect(nextState.errorMsg).toEqual(undefined);
  });

  it('should set users when fetched todos successfully', () => {
    const action = todosSlice.actions.fetchTodosSuccess({
      userId: 1,
      todos: [],
    });
    const nextState = todosSlice.reducer(initialState, action);

    expect(nextState.loading).toEqual(false);
    expect(nextState.data?.[1]).toEqual([]);
    expect(nextState.errorMsg).toEqual(undefined);
  });

  it('should set error message when fetched todos failed', () => {
    const action = todosSlice.actions.fetchTodosFail({
      userId: 1,
      errorMsg: 'Failed to fetch',
    });
    const nextState = todosSlice.reducer(initialState, action);

    expect(nextState.loading).toEqual(false);
    expect(nextState.data?.[1]).toEqual([]);
    expect(nextState.errorMsg).toEqual('Failed to fetch');
  });
});
