import { type APIRequestContext } from '@playwright/test';

export class BaseApi {
  readonly request: APIRequestContext;
  readonly baseUrl: string;
  readonly version: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseUrl = 'https://api.trello.com';
    this.version = '/1';
  }
}
