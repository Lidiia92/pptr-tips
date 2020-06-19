const puppeteer = require("puppeteer");
const devices = require("puppeteer/DeviceDescriptors")["devicesMap"];

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

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto("https://www.example.com", { waitUntil: "networkidle0" });
//   await page.pdf({ path: "example.pdf", format: "A4" });
//   await browser.close();
// })();

//*****************************************************************/

// 3. EMULATING DEVICES

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.emulate(devices["iPhone X"]);
//   await page.goto("https://www.example.com");
//   await page.waitFor(3000);
//   await browser.close();
// })();

//*****************************************************************/

// 4. FAKING GEOLOCATION

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   //Grant permission for geolocation change
//   const context = await browser.defaultBrowserContext();
//   await context.overridePermissions("https://www.example.com", ["geolocation"]);

//   await page.goto("https://www.example.com");
//   await page.waitForSelector("title");

//   //Change gelocation to the north pole;
//   await page.setGeolocation({ latitude: 90, longitude: 0 });
//   await browser.close();
// })();

//*****************************************************************/

// 5. ACCESSIBILITY TEST

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto("https://www.example.com");
//   await page.waitForSelector("title");
//   const snapshot = await page.accessibility.snapshot();
//   console.log(snapshot);
//   await browser.close();
// })();

//*****************************************************************/

// 6. MEASURING WEBSITE PERFORMANCE DATA

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.example.com");
  await page.waitForSelector("title");

  //Execute Navigation API withing the page context
  const metrics = await page.evaluate(() => {
    return JSON.stringify(window.performance);
  });
  console.log(JSON.parse(metrics));
  await browser.close();
})();

//*****************************************************************/
