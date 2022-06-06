import { LaunchOptions } from '@playwright/test';
const browserOptions: LaunchOptions = {
  slowMo: 0,
  args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'],
  firefoxUserPrefs: {
    'media.navigator.streams.fake': true,
    'media.navigator.permission.disabled': true,
  },
  headless: false,
};

export const config = {
  browser: process.env.BROWSER || 'chromium',
  browserOptions,
  args: ['--start-maximized'],
  BASE_URL: 'https://demo.playwright.dev/todomvc/',
  IMG_THRESHOLD: { threshold: 0.4 },
  BASE_API_URL: 'https://catfact.ninja/',
};
