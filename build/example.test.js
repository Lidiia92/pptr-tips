"use strict";

var _homepage = require("./homepage");

var _homepage2 = _interopRequireDefault(_homepage);

var _mochaSteps = require("mocha-steps");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var puppeteer = require("puppeteer");


describe("Loads URL", function () {
  var browser = void 0;
  var page = void 0;

  before(async function () {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
    await page.setDefaultTimeout(7000);
  });

  after(async function () {
    await browser.close();
  });
  (0, _mochaSteps.step)("should open website", async function () {
    var homepage = new _homepage2.default(page);
    await homepage.visit();
  });
});