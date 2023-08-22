import { BaseApi } from './base-api';

export class WorkspaceApi extends BaseApi {
  async delete(id: string) {
    return await this.request.delete(
      `${this.baseUrl}${this.version}/organizations/${id}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_API_TOKEN}`
    );
  }
}
