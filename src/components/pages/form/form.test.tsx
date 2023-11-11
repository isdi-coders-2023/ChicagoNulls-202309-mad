import '@testing-library/jest-dom';

import { render, screen, act, waitFor } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import { Form } from './form';

describe('Given FormCharacter component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<Form />);
    });

    test('handles form submission correctly', async () => {
      const nameInput = screen.getByPlaceholderText(
        'Ingresa el nombre'
      ) as HTMLInputElement;

      const submitButton = screen.getByText('Submit');

      await act(async () => {
        userEvent.type(nameInput, 'John');
      });

      await act(async () => {
        userEvent.click(submitButton);
      });

      await waitFor(() => {
        expect(console.log).toHaveBeenCalled({
          name: 'John',

          level: '',

          mind: '',

          vigor: '',

          strength: '',

          classType: 'Human',
        });
      });
    });
  });
});
