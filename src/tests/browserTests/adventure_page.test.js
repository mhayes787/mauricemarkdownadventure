import AdventurePage from './pageObjects/adventure_page';
import { Selector, t as browser } from 'testcafe';

const adventurePage = new AdventurePage();
const url = 'http://localhost:3000/MauriceMarkdownAdventure';

fixture('adventure')
    .page(url);

test('Check Title', async browser => {
    await browser.expect(adventurePage.title).ok();
})

test('Check Markdown Title', async browser => {
    await browser.expect(adventurePage.title).ok();
})
test('Check if Enter Markdown is appearing ', async browser => {
    await browser.expect(adventurePage.markdowntitle).ok();
})

test('Check Output Title', async browser => {
    await browser.expect(adventurePage.previewtitle).ok();
})

test('Check if Enter Markdown text is displaying', async browser => {
    await browser.expect(adventurePage.text).ok();
})

test('Check Go To Home Link', async browser => {
    await browser.expect(adventurePage.link).ok();
})




