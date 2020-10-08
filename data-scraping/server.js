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
  // await page.click("#cookie-dismiss");

  // collect recycling info from page
  const recyclingInformation = await page.$$eval(
    ".item--bin", //.item__content__copy
    (nodeList) =>
      //Nodelist - contains a list of all the ".item__content__copy"s
      nodeList.map(
        (node) => {
          const category = node.querySelector("h3");
          const categoryText = category ? category.textContent : null;
          const bin = node.querySelector("p");
          const binText = bin ? bin.textContent : null;
          return { categoryText, binText };
        }
        // node.textContent.replace(/\t/g, "").replace(/\n+/g, "/\n/")
      )
  );

  // create string from colected data
  // const infoForBorough = recyclingInformation.join("||").replace(/\s\s/g, "_");
  const infoForBorough = JSON.stringify(recyclingInformation);

  // write recycling information into a text file
  fs.writeFile(
    `./data-scraping/data/${borough}.json`,
    infoForBorough,
    () => {}
  );

  browser.close();
}

getInfo("haringey");
// boroughs.forEach((b) => getInfo(b));

/*

 -- create one file called data.json which will have the data for all the boroughs
 --- 
{<boroughName>:{
  plastic: bin-colour
}}


*/
