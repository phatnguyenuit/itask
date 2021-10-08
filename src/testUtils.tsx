import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import createMockStoreConfiguration from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';

import { createRootSaga } from 'utils/state/createStore';
import { buildRootState, RootState, slices } from './states/store';

const rootSaga = createRootSaga(slices);
const sagaMiddleware = createSagaMiddleware();

const createMockStore = createMockStoreConfiguration<RootState>([
  sagaMiddleware,
]);

export const renderWithRedux = (
  component: ReactNode,
  setupState?: Partial<RootState>,
) => {
  const defaultState = buildRootState(setupState);
  const store = createMockStore(defaultState);

  // Run saga middleware first
  sagaMiddleware.run(rootSaga);

  const renderResult = render(<Provider store={store}>{component}</Provider>);

  return {
    store,
    renderResult,
  };
};
