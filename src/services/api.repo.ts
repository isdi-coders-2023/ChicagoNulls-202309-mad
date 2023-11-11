import { ApiResponse, CharacterStructure } from '../models/eldenring.api';
export class ApiRepo {
  url: string;
  page: number;
  characterUrl: string;
  constructor(page: number) {
    this.url = 'https://eldenring.fanapis.com/api/classes?limit=3&page=';
    this.page = page;
    this.characterUrl = this.url + this.page;
  }

  async getClasses(): Promise<CharacterStructure[]> {
    const response = await fetch(this.characterUrl);
    if (!response.ok)
      throw new Error(response.status + ' ' + response.statusText);
    const fullData = (await response.json()) as ApiResponse;
    return fullData.data;
  }
}
