import { BaseApi } from './base-api';

export class MemberApi extends BaseApi {
  async getBoards() {
    return await this.request.get(
      `${this.baseUrl}${this.version}/members/me/boards?fields=id,name&organization=true&organization_fields=id,name&key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_API_TOKEN}`
    );
  }

  async getOrganizations() {
    return await this.request.get(
      `${this.baseUrl}${this.version}/members/me/organizations?fields=id,name&key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_API_TOKEN}`
    );
  }
}
