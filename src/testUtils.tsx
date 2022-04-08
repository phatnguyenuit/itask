import { ReactNode } from 'react';

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import createMockStoreConfiguration from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';

import { createRootSaga } from 'utils/state/createStore';

import {
  RootState,
  buildRootState,
  configureStore,
  slices,
} from './states/store';

export const renderWithMockRedux = (
  component: ReactNode,
  setupState?: Partial<RootState>,
) => {
  const rootSaga = createRootSaga(slices);
  const sagaMiddleware = createSagaMiddleware();
  const createMockStore = createMockStoreConfiguration<RootState>([
    sagaMiddleware,
  ]);
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

export const renderWithRedux = (
  component: ReactNode,
  setupState?: Partial<RootState>,
) => {
  const preloadedState = buildRootState(setupState);
  const store = configureStore(preloadedState);

  const renderResult = render(<Provider store={store}>{component}</Provider>);

  return {
    store,
    renderResult,
  };
};
