import { delay, put } from 'redux-saga/effects';

import createSlice from '../createSlice';

interface TestState {
  msg: string;
  loading: boolean;
  data?: string;
  errorMsg?: string;
}

const initialState: TestState = {
  msg: '',
  loading: false,
};

describe('createSlice', () => {
  it('should create slice object', () => {
    const testSlice = createSlice({
      name: 'test',
      initialState,
      reducers: {
        hello: (state, payload: string) => ({
          ...state,
          msg: payload,
        }),
        request: (state, _user: string) => ({
          ...state,
          loading: true,
        }),
        requestSuccess: (state, data: string) => ({
          ...state,
          loading: false,
          data,
        }),
        requestFail: (state, errorMsg: string) => ({
          ...state,
          loading: false,
          data: undefined,
          errorMsg,
        }),
      },
      workers: {
        request: ({ requestSuccess, requestFail }) =>
          function* handleRequest() {
            yield delay(1000);

            if (Math.random() > 0.5) {
              yield put(requestSuccess('OK'));
            } else {
              yield put(requestFail('Failed'));
            }
          },
      },
    });

    expect(testSlice.__typename).toEqual('SliceObject');
    expect(testSlice.actions).toBeTruthy();
    expect(testSlice.saga).toBeTruthy();
  });

  it('should create reducer object', () => {
    const testSlice = createSlice({
      name: 'test',
      initialState,
      reducer: (state = initialState, { type, payload }) => {
        switch (type) {
          case 'test': {
            return {
              ...state,
              msg: payload,
            };
          }
          default:
            return state;
        }
      },
    });

    expect(testSlice.__typename).toEqual('ReducerObject');
  });
});
