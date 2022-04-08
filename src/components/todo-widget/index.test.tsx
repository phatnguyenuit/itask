import { render, screen } from '@testing-library/react';

import { TODO } from 'fixtures/todo';

import WithTheme from '../with-theme';

import TodoWidget from './index';

describe('TodoWidget', () => {
  it('should render without error', () => {
    render(
      <WithTheme>
        <TodoWidget todo={TODO} />
      </WithTheme>,
    );

    expect(screen.getByText(TODO.title)).toBeVisible();
  });
});
