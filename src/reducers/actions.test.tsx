import { CharacterStructure } from '../models/eldenring.api';
import { loadActionCreator } from './actions';

describe('Action Creators', () => {
  it('should create a "load" action', () => {
    const characters: CharacterStructure[] = [
      {
        id: '1',
        name: 'Character 1',
        image: 'image1.jpg',
        description: 'Description of Character 1',
        stats: {
          level: '10',
          vigor: '15',
          mind: '10',
          strength: '20',
        },
      },
      {
        id: '2',
        name: 'Character 2',
        image: 'image2.jpg',
        description: 'Description of Character 2',
        stats: {
          level: '8',
          vigor: '12',
          mind: '8',
          strength: '18',
        },
      },
    ];

    const action = loadActionCreator(characters);

    expect(action.type).toBe('load');
    expect(action.payload).toEqual(characters);
  });
});
