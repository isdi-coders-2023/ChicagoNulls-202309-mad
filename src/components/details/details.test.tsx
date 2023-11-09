import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Details } from './details';

describe('Given Characters component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <Details
          character={{
            id: '',
            name: '',
            image: '',
            description: '',
            region: undefined,
            location: undefined,
            drops: undefined,
            healthPoints: undefined,
            stats: {
              level: '',
              vigor: '',
              mind: '',
              endurance: undefined,
              strength: '',
              dexterity: undefined,
              intelligence: undefined,
              faith: undefined,
              arcane: undefined,
            },
          }}
        ></Details>
      );
    });

    test('Then it should be the role', () => {
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });
  });
});
