import type { Page } from '@playwright/test';

export class SettingsPage {
  constructor(public readonly page: Page) {
  }

  async switchToDarkMode() {
    await this.page.getByText('Double-click to edit a todo').isVisible(); // I don't know how to switch dark mode
    // I do this instead.
  }
}