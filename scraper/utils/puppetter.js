const puppeteer = require('puppeteer-extra');

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(StealthPlugin());

const getTitle = async (url) => {
	const args = [ '--no-sandbox', '--disable-setuid-sandbox' ];

	// crate browser instance
	const browser = await puppeteer.launch({
		headless: false,
		args
	});

  // create a empty page in the browser
  console.log('openning browser')
	const page = await browser.newPage();
  // goto given url from the page
  console.log('goto url')
	await page.goto(url);
  // collect url title
  console.log('collecting url')
	const title = await page.title();
	// clear browser instance
	await browser.close();
	return title;
};

module.exports = getTitle;
