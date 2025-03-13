const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://finance.yahoo.com/quote/MSFT/");

  const consentBtn = page.locator('button[name="agree"]');
  await consentBtn.click();

  const priceElement = page.getByTestId("qsp-post-price");
  const price = await priceElement.innerText();

  console.log(price);
})();
