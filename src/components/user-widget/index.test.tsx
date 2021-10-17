import { render, screen } from '@testing-library/react';
import { User } from 'types/user';

import WithTheme from '../with-theme';
import UserWidget from './index';

describe('UserWidget', () => {
  it('should render without error', () => {
    const fakeUser = { name: 'Fast', email: 'example@gmail.com' } as User;

    render(
      <WithTheme>
        <UserWidget user={fakeUser} />
      </WithTheme>,
    );

    expect(screen.getByText(new RegExp(fakeUser.name))).toBeVisible();
    expect(screen.getByText(new RegExp(fakeUser.email))).toBeVisible();
  });
});
