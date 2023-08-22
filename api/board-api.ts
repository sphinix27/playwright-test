import { BaseApi } from './base-api';

export class BoardApi extends BaseApi {
  async create(name: string) {
    return await this.request.post(
      `${this.baseUrl}${this.version}/boards/?name=${name}&key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_API_TOKEN}`
    );
  }

  async delete(id: string) {
    return await this.request.delete(
      `${this.baseUrl}${this.version}/boards/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_API_TOKEN}`
    );
  }
}
