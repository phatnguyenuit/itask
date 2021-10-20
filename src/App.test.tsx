import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';
import WithTheme from './components/with-theme';
import { USERS } from './fixtures/user';
import { createTodos } from './fixtures/todo';
import { renderWithRedux } from './testUtils';

describe('App', () => {
  it('should render without error', () => {
    renderWithRedux(
      <WithTheme>
        <App />
      </WithTheme>,
    );

    expect(screen.getByText('iTask')).toBeVisible();
  });

  it('should render todos container', () => {
    const activeUser = USERS[0];
    const todos = createTodos(activeUser.id);

    renderWithRedux(
      <WithTheme>
        <App />
      </WithTheme>,
      {
        users: {
          loading: false,
          data: USERS,
        },
        todos: {
          loading: false,
          data: {
            [activeUser.id]: todos,
          },
        },
      },
    );

    const userWidget = screen.getByText(USERS[0].name);

    expect(userWidget).toBeVisible();

    userEvent.click(userWidget);

    todos.forEach(({ title }) => {
      expect(screen.getByText(title)).toBeVisible();
    });
  });
});
