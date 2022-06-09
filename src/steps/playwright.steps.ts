import { ICustomWorld } from '../core/custom-world';
import { config } from '../core/config';
import { Factory } from '../fixtures/Factory';
import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

const items = Factory.items('valid').task!;

Given('fill todo with one item', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto(config.BASE_URL);
  await page.locator('.new-todo').fill(items[0]);
});

When('press enter', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.locator('.new-todo').press('Enter');
});

Then('must display the todo', async function (this: ICustomWorld) {
  const page = this.page!;
  await expect(page.locator('.view label')).toHaveText(items[0]);
});
