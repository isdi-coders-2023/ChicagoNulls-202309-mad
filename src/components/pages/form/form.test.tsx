import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { userEvent } from '@testing-library/user-event';
import Form from './form';

describe('Given CharacterForm Component', () => {
  describe('When we instantiate', () => {
    let nameInput: HTMLInputElement;
    let submitButton: HTMLButtonElement;
    const handleSubmit = jest.fn();

    beforeEach(() => {
      render(<Form />);
      const nameInputs = screen.getAllByLabelText(
        'Vigor:'
      ) as HTMLInputElement[];
      nameInput = nameInputs[0];
      submitButton = screen.getByText('Submit');
    });

    test('It should render input', () => {
      const element = screen.getAllByRole('combobox')[0];
      expect(element).toBeInTheDocument();
    });

    test('It should call handleSubmit when the submit button is clicked', async () => {
      await userEvent.type(nameInput, '');
      expect(nameInput).toHaveValue('');
      expect(submitButton).toBeInTheDocument();
      await userEvent.click(submitButton);
      expect(handleSubmit).toHaveBeenCalled();
    });
  });
});
