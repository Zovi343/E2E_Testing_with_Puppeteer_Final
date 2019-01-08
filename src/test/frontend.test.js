const timeout = process.env.SLOWMO ? 70000 : 20000;

beforeAll(async () => {
    await page.goto(URL, {waitUntil: 'domcontentloaded'})
});

describe('Test header and title of the page', () => {

    test('Title of the page', async () => {
        const title = await page.title();
        expect(title).toBe('E2E Puppeteer Testing');
        
    }, timeout);

    test('Header of the page', async () => {
        const h1Handle = await page.$('h1');
        const html = await page.evaluate(h1Handle => h1Handle.innerHTML, h1Handle);

        expect(html).toBe("E2E Testing with  <span class=\"pupp\">Puppeteer</span> and <span class=\"jest\">Jest</span>");
    }, timeout);
});