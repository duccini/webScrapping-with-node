const axios = require("axios");
const cheerio = require("cheerio");

const countries = [];

// Scrapping function
async function scrap() {
  // data get
  const response = await axios.get(
    "https://www.scrapethissite.com/pages/simple/"
  );

  // extract necessary info
  const $ = cheerio.load(response.data);
  $(".country-name").each((i, item) => {
    countries.push({ name: $(item).text().trim() });
  });

  $(".country-capital").each((i, item) => {
    countries[i].capital = $(item).text().trim();
  });

  console.log(countries);
}

scrap();
