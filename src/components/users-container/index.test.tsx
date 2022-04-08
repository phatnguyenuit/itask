import { cleanup, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';

import { renderWithRedux } from 'testUtils';
import { User } from 'types/user';

import WithTheme from '../with-theme';

import UsersContainer from './index';

describe('UsersContainer', () => {
  const mockRequest = jest.spyOn(axios, 'request');

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('should render without error', () => {
    const { renderResult } = renderWithRedux(
      <WithTheme>
        <UsersContainer />
      </WithTheme>,
    );

    expect(renderResult.container).toBeInTheDocument();
  });

  it('should fetch users success', async () => {
    const fakeUsers = [
      { id: 1, name: 'Fast', email: 'example@gmail.com' },
      { id: 2, name: 'Fast2', email: 'example2@gmail.com' },
    ] as User[];
    mockRequest.mockResolvedValue({ data: fakeUsers });

    renderWithRedux(
      <WithTheme>
        <UsersContainer />
      </WithTheme>,
    );

    const fetchBtn = screen.getByText('Fetch users');

    expect(fetchBtn).toBeVisible();

    userEvent.click(fetchBtn);

    await waitFor(() => {
      fakeUsers.forEach((fakeUser) => {
        expect(screen.queryByText(fakeUser.name)).toBeVisible();
        expect(screen.queryByText(fakeUser.email)).toBeVisible();
      });
    });
  });

  it('should fetch users failed with error', async () => {
    mockRequest.mockRejectedValue(new Error('Failed to fetch.'));
    renderWithRedux(
      <WithTheme>
        <UsersContainer />
      </WithTheme>,
    );

    const fetchBtn = screen.getByText('Fetch users');
    expect(fetchBtn).toBeVisible();

    userEvent.click(fetchBtn);

    expect(await screen.findByText('Failed to fetch.')).toBeVisible();
  });

  it('should fetch users failed with response', async () => {
    mockRequest.mockRejectedValue({
      response: {
        data: {
          message: 'Internal Server error.',
        },
      },
    });
    renderWithRedux(
      <WithTheme>
        <UsersContainer />
      </WithTheme>,
    );

    const fetchBtn = screen.getByText('Fetch users');
    expect(fetchBtn).toBeVisible();

    userEvent.click(fetchBtn);

    expect(await screen.findByText('Internal Server error.')).toBeVisible();
  });
});
