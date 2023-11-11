import { CharacterStructure } from '../models/eldenring.api';
import { ApiRepo } from './api.repo';

describe('Given ApiRepo class', () => {
  describe('When we instantiate it and response is ok', () => {
    let jsonMock: jest.Mock;
    beforeEach(() => {
      jsonMock = jest
        .fn()
        .mockResolvedValue({ data: [] as CharacterStructure[] });
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });
    test('Then method getClasses should be used', async () => {
      const repo = new ApiRepo(1);
      const expected = [] as CharacterStructure[];
      const result = await repo.getClasses();
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
  });

  describe('When we instantiate it and response is bad', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
      });
    });
    test('Then method getClasses should be used', async () => {
      const repo = new ApiRepo(1);
      expect(repo.getClasses()).rejects.toThrow();
    });
  });
});
