import { type Locator, type Page } from '@playwright/test';

export class WorkspaceCreatePage {
  readonly page: Page;
  readonly title: Locator;
  readonly nameInput: Locator;
  readonly typeSelect: Locator;
  readonly salesCRMOption: Locator;
  readonly submitButton: Locator;
  readonly illDoThisLaterButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = this.page.getByText("Let's build a Workspace");
    this.nameInput = this.page.locator(
      'input[data-testid="header-create-team-name-input"]'
    );
    this.typeSelect = this.page.locator(
      'div[data-testid="header-create-team-type-input"]'
    );
    this.salesCRMOption = this.page.locator(
      '[data-testid="header-create-team-type-input-sales crm"]'
    );
    this.submitButton = this.page.locator(
      '[data-testid="header-create-team-submit-button"]'
    );
    this.illDoThisLaterButton = this.page.locator(
      '[data-testid="show-later-button"]'
    );
  }

  async create(name: string) {
    await this.nameInput.fill(name);
    await this.typeSelect.click();
    await this.salesCRMOption.click();
    await this.submitButton.click();
    await this.illDoThisLaterButton.click();
  }
}
