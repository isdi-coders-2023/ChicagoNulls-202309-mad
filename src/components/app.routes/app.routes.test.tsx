import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppRoutes } from './app.routes';
import '@testing-library/jest-dom';
import { InitialEntry } from '@remix-run/router';

const renderComponent = async (route: InitialEntry) => {
  await act(async () => {
    render(
      <Router initialEntries={[route]}>
        <AppRoutes />
      </Router>
    );
  });
};

const mockComponent = (content: React.ReactNode) => {
  return {
    __esModule: true,
    default: () => {
      return content;
    },
  };
};

jest.mock('../../components/pages/custom.library/custom.library', () => {
  return mockComponent(
    <div data-testid="mocked-custom-library">
      Mocked Custom Library Component
    </div>
  );
});

jest.mock('../pages/character.page/character.page', () => {
  return mockComponent(<p data-testid="mocked-home">Mocked Home Component</p>);
});

jest.mock('../pages/error.page/error.page', () => {
  return mockComponent(
    <span data-testid="mocked-error-page">Mocked Error Page Component</span>
  );
});

jest.mock('../pages/form/form.tsx', () => {
  return mockComponent(
    <span data-testid="mocked-form">Mocked Form Component</span>
  );
});
jest.mock('../pages/details.page/details.page', () => {
  return mockComponent(
    <h1 data-testid="mocked-details-page">Mocked Details Page Component</h1>
  );
});

describe('When we render', () => {
  test('the component should render Custom Library', async () => {
    await renderComponent('/custom-library');
    const element = screen.getByTestId('mocked-custom-library');
    expect(element).toBeInTheDocument();
  });

  test('the component should render Home', async () => {
    await renderComponent('/home');
    const element = screen.getByTestId('mocked-home');
    expect(element).toBeInTheDocument();
  });

  test('the component should render Error Page', async () => {
    await renderComponent('/*');
    const element = screen.getByTestId('mocked-error-page');
    expect(element).toBeInTheDocument();
  });

  test('the component should render Details Page', async () => {
    await renderComponent('/details/:id/');
    const element = screen.getByTestId('mocked-details-page');
    expect(element).toBeInTheDocument();
  });
});

test('the component should render Form', async () => {
  await renderComponent('/form');
  const element = screen.getByTestId('mocked-form');
  expect(element).toBeInTheDocument();
});
