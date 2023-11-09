import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom'; // Importa MemoryRouter
import { AppRoutes } from './app.routes';
import '@testing-library/jest-dom';

jest.mock('../../components/pages/custom.library/custom.library', () => {
  return {
    __esModule: true,
    default: () => {
      return (
        <div data-testid="mocked-custom-library">
          Mocked Custom Library Component
        </div>
      );
    },
  };
});

describe('When we render', () => {
  test('the component should render Custom Library', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/custom-library']}>
          <AppRoutes />
        </MemoryRouter>
      );
    });
    const element = screen.getByTestId('mocked-custom-library');
    expect(element).toBeInTheDocument();
  });
});
