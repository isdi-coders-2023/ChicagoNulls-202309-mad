import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Form from './form';
import userEvent from '@testing-library/user-event';

describe('Given Form Page component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<Form />);
    });
    test('It should be in the document', () => {
      const element = screen.getByText(/Name/);
      expect(element).toBeInTheDocument();
    });

    // Envío del formulario

    test('calls handleSubmit on form submission', () => {
      userEvent.click(screen.getByRole('button', { name: /Submit/ }));
    });

    test('updates state on input change', () => {
      const nameInput = screen.getByLabelText('Name:');
      const descriptionInput = screen.getByLabelText('Description:');

      // Simula cambios en los campos de entrada
      userEvent.type(nameInput, 'John Doe');
      userEvent.type(descriptionInput, 'A description');

      // Verifica que los valores del estado se actualicen correctamente
      expect(nameInput).toHaveValue('John Doe');
      expect(descriptionInput).toHaveValue('A description');

    });
  });
});
