import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render without error', () => {
    render(<App />);

    expect(screen.getByText('iTask Management')).toBeVisible();
  });
});
