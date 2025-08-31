/**/// ## ################################################################## ##
const puppeteer = require('puppeteer');

/**/// ## ################################################################## ##
let options = {
  executablePath: '/usr/bin/chromium-browser'
};

/**/// ## ################################################################## ##
puppeteer.launch(options).then(async browser => {

  const page = await browser.newPage();
  page.on('request', msg => console.log('Requested URL: ', msg.url()));

  await page.goto('https://www.yahoo.com', {
    waitUntil: 'networkidle0'
  });

  await page.screenshot({
    // here you can set the output image path, file name and format:
    path: './screenshot.png'
  });

  await browser.close();

}, e => {
    console.error('Error: ', e);
})