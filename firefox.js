const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    product: "firefox",
    executablePath: "C:\\Program Files\\Mozilla Firefox\\firefox.exe",
    args: ["--wait-for-browser"],
  });
  const page = await browser.newPage();
  await page.goto("https://www.example.com", { waitUntil: "networkidle0" });

  await browser.close();
})();
