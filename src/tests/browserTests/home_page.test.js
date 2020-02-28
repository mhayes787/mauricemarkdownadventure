import HomePage from './pageObjects/home_page';
import { Selector, t as browser } from 'testcafe';

const homepage = new HomePage();
const url = 'http://localhost:3000/';

fixture('homepage')
    .page(url);

test('Check Title', async browser => {
    await browser.expect(homepage.title).ok();
})

test('Check Link', async browser => {
    await browser.expect(homepage.link).ok();
})