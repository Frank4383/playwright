import { test, expect } from '@playwright/test'; 
test('lidl.de', async({ page }) => { 
  await page.goto('https://www.lidl.de') });
