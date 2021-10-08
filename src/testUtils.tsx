import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import createMockStoreConfiguration from 'redux-mock-store';

import { buildRootState, RootState } from './states/store';

const createMockStore = createMockStoreConfiguration<RootState>();

export const renderWithRedux = (
  component: ReactNode,
  setupState?: Partial<RootState>,
) => {
  const defaultState = buildRootState(setupState);
  const store = createMockStore(defaultState);

  const renderResult = render(<Provider store={store}>{component}</Provider>);

  return {
    store,
    renderResult,
  };
};
