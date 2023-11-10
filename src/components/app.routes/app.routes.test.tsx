import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter as Router } from 'react-router-dom'; // Importa MemoryRouter
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

jest.mock('../pages/character.page/character.page', () => {
  return {
    __esModule: true,
    default: () => {
      return <div data-testid="mocked-home">Mocked Home Component</div>;
    },
  };
});

jest.mock('../pages/error.page/error.page', () => {
  return {
    __esModule: true,
    default: () => {
      return (
        <div data-testid="mocked-error-page">Mocked Error Page Component</div>
      );
    },
  };
});

jest.mock('../pages/details.page/details.page', () => {
  return {
    __esModule: true,
    default: () => {
      return (
        <div data-testid="mocked-details-page">
          Mocked Details Page Component
        </div>
      );
    },
  };
});

describe('When we render', () => {
  test('the component should render Custom Library', async () => {
    await act(async () => {
      render(
        <Router initialEntries={['/custom-library']}>
          <AppRoutes />
        </Router>
      );
    });
    const element = screen.getByTestId('mocked-custom-library');
    expect(element).toBeInTheDocument();
  });

  test('the component should render Home', async () => {
    await act(async () => {
      render(
        <Router initialEntries={['/home']}>
          <AppRoutes />
        </Router>
      );
    });
    const element = screen.getByTestId('mocked-home');
    expect(element).toBeInTheDocument();
  });

  test('the component should render Error Page', async () => {
    await act(async () => {
      render(
        <Router initialEntries={['/*']}>
          <AppRoutes />
        </Router>
      );
    });
    const element = screen.getByTestId('mocked-error-page');
    expect(element).toBeInTheDocument();
  });

  test('the component should render Error Page', async () => {
    await act(async () => {
      render(
        <Router initialEntries={['/details/:id/']}>
          <AppRoutes />
        </Router>
      );
    });
    const element = screen.getByTestId('mocked-details-page');
    expect(element).toBeInTheDocument();
  });
});
