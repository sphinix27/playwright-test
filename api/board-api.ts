import { BaseApi } from './base-api';

export class BoardApi extends BaseApi {
  async create(name: string) {
    const create = await this.request.post(
      `${this.baseUrl}${this.version}/boards/?name=${name}&key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_API_TOKEN}`
    );
    return create;
  }

  async delete(id: string) {
    console.log(
      `${this.baseUrl}${this.version}/boards/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_API_TOKEN}`
    );
    const del = await this.request.delete(
      `${this.baseUrl}${this.version}/boards/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_API_TOKEN}`
    );
    return del;
  }
}
