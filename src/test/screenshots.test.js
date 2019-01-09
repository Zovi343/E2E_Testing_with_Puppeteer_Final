const timeout = process.env.SLOWMO ? 30000 : 10000;
const devices = require('puppeteer/DeviceDescriptors');

beforeAll(async () => {
    await page.goto(URL, {waitUntil: 'domcontentloaded'})
});

describe('Take screenshots', () => {
    test('Take screenshot of home page', async () => {
        await page.setViewport({ width: 1920, height: 1080 })
        await page.screenshot({
            path: './src/test/screenshots/home.jpg',
            fullpage: true,
            type: 'jpeg'
        });
    }, timeout);

    test('Emulate Mobile Device And take screenshot', async () => {
        const iPhonex = devices['iPhone X'];
        await page.emulate(iPhonex);
        await page.screenshot({
            path: './src/test/screenshots/home-mobile.jpg',
            fullpage: true,
            type: 'jpeg'
        });
    }, timeout);
});