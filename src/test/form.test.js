const timeout = process.env.SLOWMO ? 30000 : 20000;

beforeAll(async () => {
    await page.goto(URL, {waitUntil: 'domcontentloaded'});
});

describe('Test form', () => {

    test('Submit form with valid data', async () => {

        await page.click('[href="/login"]');
        
        await page.waitForSelector('form');
        await page.type('#name', 'Rick');

        await page.type('#password','szechuanSauce');

        await page.type('#repeat_password','szechuanSauce');

        await page.click('[type="submit"]');

        await page.waitForSelector('.success');

        const html = await page.evaluate(() => {
            return document.querySelector('.success').innerHTML;
        });

        expect(html).toBe('Successfully signed up!');
    }, timeout);

    test('Submit form with invalid data', async () => {
        await page.goto(`${URL}/login`, {waitUntil: 'domcontentloaded'});
        
        await page.waitForSelector('form');
        await page.type('#name', 'Rick');

        await page.type('#password','szechuanSauce');

        await page.type('#repeat_password','wubbalubbadubdub');

        await page.click('[type="submit"]');

        await page.waitForSelector('.error');

        const html = await page.evaluate(() => {
            return document.querySelector('.error').innerHTML;
        });

        expect(html).toBe('Passwords do not match!');
    }, timeout);
});





