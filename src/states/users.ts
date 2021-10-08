import axios, { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import { User } from 'types/user';
import createSlice from 'utils/state/createSlice';

interface UsersState {
  loading: boolean;
  errorMsg?: string;
  data?: User[];
}

export const buildUsersState: StateBuilder<UsersState> = (overrides = {}) => ({
  loading: false,
  ...overrides,
});

export const initialState: UsersState = buildUsersState();

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsers: (state: UsersState) => ({
      ...state,
      loading: true,
    }),
    fetchUsersSuccess: (state: UsersState, users: User[]) => ({
      ...state,
      loading: false,
      data: users,
      errorMsg: undefined,
    }),
    fetchUsersFail: (state: UsersState, errorMsg: string) => ({
      ...state,
      errorMsg,
      loading: false,
      data: undefined,
    }),
  },
  workers: {
    fetchUsers: ({ fetchUsersSuccess, fetchUsersFail }) =>
      function* () {
        try {
          const { data }: AxiosResponse<User[]> = yield call(axios.request, {
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/users',
          });

          yield put(fetchUsersSuccess(data));
        } catch (error) {
          const message: string = error.response
            ? error.response.data.message
            : error.message;

          yield put(fetchUsersFail(message));
        }
      },
  },
});

export default usersSlice;

export const { fetchUsers } = usersSlice.actions;
