import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './card';

describe('Given List component', () => {
  describe('When we instantiate', () => {
    render(
      <Card
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
      ></Card>
    );

    test('It should be in the document', () => {
      const element = screen.getByRole('listitem');
      expect(element).toBeInTheDocument();
    });
  });
});
