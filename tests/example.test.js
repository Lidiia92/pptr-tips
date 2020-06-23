const puppeteer = require("puppeteer");
import HomePage from "./homepage";
import { step } from "mocha-steps";

describe("Loads URL", () => {
  let browser;
  let page;

  before(async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
    await page.setDefaultTimeout(7000);
  });

  after(async () => {
    await browser.close();
  });
  step("should open website", async () => {
    const homepage = new HomePage(page);
    await homepage.visit();
  });
});
