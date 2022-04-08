import { cleanup, screen, waitFor } from '@testing-library/react';
import axios from 'axios';

import { createTodos } from 'fixtures/todo';
import { USERS } from 'fixtures/user';
import { renderWithRedux } from 'testUtils';

import WithTheme from '../with-theme';

import TodosContainer from './index';

describe('TodosContainer', () => {
  const mockRequest = jest.spyOn(axios, 'request');
  const activeUser = USERS[0];
  const todos = createTodos(activeUser.id, 2);

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('should render without error', () => {
    renderWithRedux(
      <WithTheme>
        <TodosContainer user={activeUser} />
      </WithTheme>,
    );

    expect(screen.getByText(`List todos of ${activeUser.name}`)).toBeVisible();
  });

  it('should render todos', async () => {
    renderWithRedux(
      <WithTheme>
        <TodosContainer user={activeUser} />
      </WithTheme>,
      {
        todos: {
          loading: false,
          data: {
            [activeUser.id]: todos,
          },
        },
      },
    );

    await waitFor(() => {
      todos.forEach(({ title }) => {
        expect(screen.getByText(title)).toBeVisible();
      });
    });
  });

  it('should fetch todos successfully', async () => {
    mockRequest.mockResolvedValue({ data: todos });

    renderWithRedux(
      <WithTheme>
        <TodosContainer user={activeUser} />
      </WithTheme>,
    );

    await waitFor(() => {
      todos.forEach(({ title }) => {
        expect(screen.getByText(title)).toBeVisible();
      });
    });
  });

  it('should fetch todos failed with error', async () => {
    mockRequest.mockRejectedValue(new Error('Failed to fetch'));

    renderWithRedux(
      <WithTheme>
        <TodosContainer user={activeUser} />
      </WithTheme>,
    );

    await waitFor(() => {
      expect(screen.getByText('Failed to fetch')).toBeVisible();
    });
  });

  it('should fetch todos failed with response', async () => {
    mockRequest.mockRejectedValue({
      response: {
        data: {
          message: 'Internal Server error.',
        },
      },
    });

    renderWithRedux(
      <WithTheme>
        <TodosContainer user={activeUser} />
      </WithTheme>,
    );

    await waitFor(() => {
      expect(screen.getByText('Internal Server error.')).toBeVisible();
    });
  });
});
