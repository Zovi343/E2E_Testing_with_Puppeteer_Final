const timeout = process.env.SLOWMO ? 30000 : 10000;

beforeAll(async () => {
    await page.goto(URL, {waitUntil: 'domcontentloaded'});
});

describe('Test header and title of the page', () => {
    test('Title of the page', async () => {
        const title = await page.title();
        expect(title).toBe('E2E Puppeteer Testing');
    }, timeout);

    test('Header of the page', async () => {
        const headerHandle = await page.$('.learn_header');
        const html = await page.evaluate(headerHandle => headerHandle.innerHTML, headerHandle);

        expect(html).toBe("What will you learn");
    }, timeout);
});