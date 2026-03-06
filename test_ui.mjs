import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log('Navigating to local server...');
  await page.goto('http://localhost:5173/Universal-Genealogy-of-Despecho/');

  console.log('Waiting for the app to render...');
  await new Promise(r => setTimeout(r, 3000));

  console.log('Taking screenshot...');
  await page.screenshot({ path: 'screenshot.png', fullPage: true });

  console.log('Screenshot saved to screenshot.png');
  await browser.close();
})();
