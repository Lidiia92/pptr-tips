const puppeteer = require("puppeteer");

// 1. GENERATE A FULL PAGE SCREENSHOT

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto("https://www.example.com", { waitUntil: "networkidle0" });
//   await page.screenshot({ path: "example.png", fullPage: true });
//   await browser.close();
// })();

//*****************************************************************/

// 2. GENERATE A FULL PAGE PDF

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.example.com", { waitUntil: "networkidle0" });
  await page.pdf({ path: "example.pdf", format: "A4" });
  await browser.close();
})();

//*****************************************************************/
