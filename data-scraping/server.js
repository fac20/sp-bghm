const puppeteer = require("puppeteer");
const fs = require("fs");

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

  // collect recycling info from page
  const recyclingInformation = await page.$$eval(".slider", (nodeList) =>
    nodeList.map((slide) =>
      slide.textContent.replace(/\t/g, "").replace(/\n+/g, "/\n/")
    )
  );

  // create string from colected data
  // const infoForBorough = recyclingInformation.join("||").replace(/\s\s/g, "_");
  const infoForBorough = JSON.stringify(recyclingInformation);

  // write recycling information into a text file
  fs.writeFile(
    `./data-scraping/data/${borough}.txt`,
    infoForBorough,
    "utf8",
    () => {}
  );

  browser.close();
}

getInfo("haringey");
// boroughs.forEach((b) => getInfo(b));

// var myJSON = JSON.stringify(obj);
