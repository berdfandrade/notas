import puppeteer from puppeteer 

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  
    // Navegue até a página desejada
    await page.goto('URL_DA_PÁGINA');
  
    // Espere a página carregar completamente
    await page.waitForSelector('SELETOR_DA_DIV');
  
    // Obtenha a URL da div
    const url = await page.$eval('SELETOR_DA_DIV a', (a) => a.href);
  
    console.log('URL encontrada:', url);
  
    await browser.close();
  })();
