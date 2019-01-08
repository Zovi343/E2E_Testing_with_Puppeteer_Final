const timeout = process.env.SLOWMO ? 70000 : 20000;

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
        await page.goto(URL, {waitUntil: 'domcontentloaded'});
        // await jestPuppeteer.debug();
        
    }, timeout);
    
    test('Target newly opened tab', async () => {
        const newPagePromise = new Promise(x => browser.once('targetcreated', target => x(target.page())));
        await page.click('.repo_link');

        const newPage = await newPagePromise;
        const title = await newPage.title();
        await newPage.close();

        expect(title).toBe('GitHub - Zovi343/E2E_Testing_with_Puppeteer_Final')
    }, timeout);

});