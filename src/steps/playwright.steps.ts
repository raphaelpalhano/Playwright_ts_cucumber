import { ICustomWorld } from '../core/custom-world';
import { config } from '../core/config';
import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

const TODO_ITEMS = ['buy some cheese', 'feed the cat', 'book a doctors appointment'];

Given('fill todo with one item', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto(config.BASE_URL);
  await page.locator('.new-todo').fill(TODO_ITEMS[0]);
});

When('press enter', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator('.new-todo').press('Enter');
});

Then('must display the todo', async function (this: ICustomWorld) {
  const page = this.page!;
  await expect(page.locator('.view label')).toHaveText([TODO_ITEMS[0]]);
});
