import * as reduxModule from 'redux';
import { compose } from 'redux';
import * as reduxDevToolsModule from 'redux-devtools-extension';
import { composeWithDevTools } from 'redux-devtools-extension';

import createSlice from '../createSlice';
import createStore from '../createStore';

interface TestState {
  msg: string;
}

const initialState: TestState = {
  msg: '',
};

describe('createStore', () => {
  const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
      hello: (state, payload: string) => ({
        ...state,
        msg: payload,
      }),
    },
  });

  it('should return store', () => {
    const store = createStore({ test: testSlice });

    expect(store.dispatch).toBeTruthy();
    expect(store.getState).toBeTruthy();
  });

  describe.each`
    env              | composeFnName            | usedModule             | mockImplementation
    ${'development'} | ${'composeWithDevTools'} | ${reduxDevToolsModule} | ${composeWithDevTools}
    ${'test'}        | ${'compose'}             | ${reduxModule}         | ${compose}
    ${'production'}  | ${'compose'}             | ${reduxModule}         | ${compose}
  `(
    'with "$env" env',
    ({ env, composeFnName, usedModule, mockImplementation }) => {
      const originalEnv = process.env;

      beforeEach(() => {
        jest.resetModules();
        process.env = {
          ...originalEnv,
          NODE_ENV: env,
        };
      });

      afterEach(() => {
        process.env = originalEnv;
      });

      it(`should use ${composeFnName}`, () => {
        const mockCompose = jest
          .spyOn(usedModule, composeFnName)
          .mockImplementation(mockImplementation);

        createStore({ test: testSlice });

        expect(mockCompose).toBeCalled();
        expect(mockCompose).toBeCalledTimes(1);
      });
    },
  );
});
