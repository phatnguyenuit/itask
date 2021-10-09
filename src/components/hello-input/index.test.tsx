import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { selectHelloMessage } from 'selectors/hello';

import { renderWithRedux } from 'testUtils';
import HelloInput from './index';

describe('HelloInput', () => {
  it('should render without error', () => {
    renderWithRedux(<HelloInput />);

    expect(screen.getByLabelText(`What's your name ?`)).toBeInTheDocument();
  });

  it('should be able to input text', () => {
    renderWithRedux(<HelloInput />);

    const input = screen.getByLabelText(`What's your name ?`);
    userEvent.type(input, 'Fast');

    expect(input).toHaveValue('Fast');
  });

  it('should store value to redux after inputted text', () => {
    const { store } = renderWithRedux(<HelloInput />);

    const input = screen.getByLabelText(`What's your name ?`);
    userEvent.type(input, 'Fast');
    userEvent.click(document.body); // Blur input

    expect(selectHelloMessage(store.getState())).toEqual('Fast');
  });
});
