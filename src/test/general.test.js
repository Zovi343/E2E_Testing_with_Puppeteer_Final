const timeout = process.env.SLOWMO ? 30000 : 10000;

beforeAll(async () => {
    await page.goto(URL, {waitUntil: 'domcontentloaded'});
});

describe('General Tests', () => {
    test('Intercept Request', async () => {
        await page.setRequestInterception(true);
        page.on('request', interceptedRequest => {
            if (interceptedRequest.url().endsWith('.png')) {
                interceptedRequest.abort();
            } else {
                interceptedRequest.continue();
            }
        });
        await page.reload({waitUntil: 'networkidle0'});
        // await jestPuppeteer.debug();
        await page.setRequestInterception(false);
    }, timeout);
    
    test('Target newly opened page', async () => {
        const newPagePromise = new Promise(resolve => browser.once('targetcreated', target => resolve(target.page())));
        await page.click('.repo_link');

        const newPage = await newPagePromise;
        const title = await newPage.title();
        await newPage.close();

        expect(title).toBe('GitHub - Zovi343/E2E_Testing_with_Puppeteer_Final');
    }, timeout);
});