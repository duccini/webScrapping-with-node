const puppeteer = require("puppeteer");

async function scrap() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto("https://books.toscrape.com/");

  // pagina terminou de processar informações web (scripts, imagens)
  await page.waitForNetworkIdle();

  // pegar as informações
  const result = await page.evaluate(() => {
    return document;
  });

  console.log(result);

  browser.close();
}

scrap();
