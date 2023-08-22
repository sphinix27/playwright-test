import { type Locator, type Page } from '@playwright/test';

export class WorkspaceSideBarPage {
  readonly page: Page;
  readonly homeNavCreateTeamButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeNavCreateTeamButton = page.locator(
      '[data-testid="home-navigation-create-team-button"] > span'
    );
  }

  async openModal() {
    await this.homeNavCreateTeamButton.click();
  }
}
