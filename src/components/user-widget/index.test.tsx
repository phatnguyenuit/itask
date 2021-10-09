import { render, screen } from '@testing-library/react';
import { User } from 'types/user';

import UserWidget from './index';

describe('UserWidget', () => {
  it('should render without error', () => {
    const fakeUser = { name: 'Fast', email: 'example@gmail.com' } as User;

    render(<UserWidget user={fakeUser} />);

    expect(screen.getByText(new RegExp(fakeUser.name))).toBeVisible();
    expect(screen.getByText(new RegExp(fakeUser.email))).toBeVisible();
  });
});
