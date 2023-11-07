import { useCallback, useMemo, useState } from 'react';
import { ApiRepo } from '../services/api.repo';
import { CharacterStructure } from '../models/eldenring.api';

export function useClasses() {
  const [characters, setCharacters] = useState<CharacterStructure[]>([]);

  const repo = useMemo(() => new ApiRepo(), []);

  const loadCharacters = useCallback(async () => {
    try {
      // Asíncrona
      const loadedClasses = await repo.getClasses();
      // Síncrono
      setCharacters(loadedClasses);
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [repo]);

  return {
    characters,
    loadCharacters,
  };
}
