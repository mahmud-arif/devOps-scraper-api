const puppeteer = require('puppeteer-extra');

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(StealthPlugin());

const getTitle = async (url) => {
	const args = [ '--no-sandbox', '--disable-setuid-sandbox' ];

	const browser = await puppeteer.launch({
		headless: false,
		args
	});
	const page = await browser.newPage();
	await page.goto(url);
	const title = await page.title();
	await browser.close();
	return title;
};

module.exports = getTitle;
