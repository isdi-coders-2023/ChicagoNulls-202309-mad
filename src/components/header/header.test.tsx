/* import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './header';
import { Menu } from "../menu/menu";

jest.mock('../menu/menu');

describe('Given Header component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<Header></Header>);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
      const Menu = screen.getByRole('list');
      expect(Menu).toBeInTheDocument();
    });
  });
}); */
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './header';
import { Menu } from '../menu/menu';

jest.mock('../menu/menu');

describe('Given Header component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<Header></Header>);
    });

    test('Then it should be in the document', () => {
      expect(Menu).toHaveBeenCalled();
    });
  });
});
