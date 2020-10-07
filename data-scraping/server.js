const puppeteer = require("puppeteer");

const boroughsTitleCase = require("./london-boroughs");
const boroughs = boroughsTitleCase.map((borough) =>
  borough
    .split(/\ and\ |\ /)
    .join("-")
    .toLocaleLowerCase()
);

async function getInfo(borough) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(`https://londonrecycles.co.uk/boroughs/${borough}/`);
  //   close the popup
  await page.click("#cookie-dismiss");

  await page.screenshot({ path: `./data-scraping/screenshots/${borough}.png` });
  // await page.evaluate((".m-wysiwyg").textContent) => {
  //     results.push(".m-wysiwyg").textContent)
  // })

  browser.close();
}

boroughs.forEach((b) => getInfo(b));
