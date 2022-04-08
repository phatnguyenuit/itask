import axios, { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';

import { Todo } from 'types/todo';
import createSlice from 'utils/state/createSlice';

interface TodosState {
  loading: boolean;
  errorMsg?: string;
  data?: Record<number, Todo[]>;
}

export const buildTodosState: StateBuilder<TodosState> = (overrides = {}) => ({
  loading: false,
  ...overrides,
});

export const initialState: TodosState = buildTodosState();

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    fetchTodos: (state: TodosState, _userId: number) => ({
      ...state,
      loading: true,
    }),
    fetchTodosSuccess: (
      state: TodosState,
      { userId, todos }: { userId: number; todos: Todo[] },
    ) => ({
      ...state,
      loading: false,
      data: {
        ...state.data,
        [userId]: todos,
      },
      errorMsg: undefined,
    }),
    fetchTodosFail: (
      state: TodosState,
      { userId, errorMsg }: { userId: number; errorMsg: string },
    ) => ({
      ...state,
      errorMsg,
      loading: false,
      data: {
        ...state.data,
        [userId]: [],
      },
    }),
  },
  workers: {
    fetchTodos: ({ fetchTodosSuccess, fetchTodosFail }) =>
      function* ({ payload: userId }) {
        try {
          // call([axios, 'request']) to pass context $axios to $axios.request method
          const { data }: AxiosResponse<Todo[]> = yield call(
            [axios, 'request'],
            {
              method: 'get',
              url: `https://jsonplaceholder.typicode.com/users/${userId}/todos`,
            },
          );

          yield put(
            fetchTodosSuccess({
              userId,
              todos: data,
            }),
          );
        } catch (error: any) {
          const message: string = error.response
            ? error.response.data.message
            : error.message;

          yield put(
            fetchTodosFail({
              userId,
              errorMsg: message,
            }),
          );
        }
      },
  },
});

export default todosSlice;

export const { fetchTodos } = todosSlice.actions;
