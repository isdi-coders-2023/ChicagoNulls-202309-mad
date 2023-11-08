import { ApiResponse, CharacterStructure } from '../models/eldenring.api';
export class ApiRepo {
  apiUrlClasses = 'https://eldenring.fanapis.com/api/classes';
  apiUrlBosses = 'https://eldenring.fanapis.com/api/bosses';

  async getClasses(): Promise<CharacterStructure[]> {
    const response = await fetch(this.apiUrlClasses);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    const fullData = (await response.json()) as ApiResponse;
    return fullData.data;
  }

  async getBosses(): Promise<CharacterStructure[]> {
    const response2 = await fetch(this.apiUrlBosses);
    if (!response2.ok) {
      throw new Error(response2.status + ' ' + response2.statusText);
    }
    return response2.json();
  }
}
