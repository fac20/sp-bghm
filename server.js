const puppeteer = require("puppeteer");

// const results = []
// Haringey council url:  https://www.haringey.gov.uk/
// Redbridge council url: https://www.redbridge.gov.uk/
// Ealing council url:  https://www.ealing.gov.uk/
// islington council url: https://www.islington.gov.uk/

async function getInfo() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto("https://www.islington.gov.uk/");
  //   close the popup
  await page.click('button[title="Close subscription dialog"]');
  //  find a recycling info page
  //   await page.click("a[href='/recycling-and-rubbish']");
  //   await page.click("a[href='/recycling-and-rubbish/recycling']");
  //  get the elements with the the info

  await page.screenshot({ path: "screenshots/islington.png" });
  // await page.evaluate((".m-wysiwyg").textContent) => {
  //     results.push(".m-wysiwyg").textContent)
  // })
  //   document.querySelector(".m-wysiwyg").textContent

  //   https://www.islington.gov.uk/recycling-and-rubbish/recycling/mixed-recycling/plastic-packaging/what-you-cannot-recycle#guide-sections

  //   islington recycling url : https://www.islington.gov.uk/recycling-and-rubbish/recycling/mixed-recycling/plastic-packaging/

  // //   document.querySelector("button[title='Close subscription dialog']").click()

  browser.close();
}
getInfo();
