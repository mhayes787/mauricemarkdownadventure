import AdventurePage from './pageObjects/adventure_page';
import { Selector } from 'testcafe';



const adventurePage = new AdventurePage();
const url = 'http://localhost:3000/MauriceMarkdownAdventure';
const textInput = Selector('#EnterTextArea')

fixture('adventure')
    .page(url);

test('Check Page Title', async t => {
    await t
        .expect(adventurePage.title.innerText).eql('Maurice Markdown Adventure');
})

test('Check if Maurice Markdown title appears', async t => {
    await t
        .expect(adventurePage.mauriceMarkdownTitle.innerText).eql('Maurice Markdown');
})
test('Check if Maurice Markdown Output appears', async t => {
    await t
        .expect(adventurePage.mauriceOutputTitle.innerText).eql('Maurice Output');
})
test("Check link name or title", async t => {
    await t
        .expect(adventurePage.link.innerText).eql('Click here for Home page');
})
test('Check if you are able to input text', async t => {
    await t
        .typeText(textInput, '# Maurice Markdown Test')
        .pressKey('enter')
        .typeText(textInput, '## Maurice Markdown Test')
        .pressKey('enter')
        .typeText(textInput, '### Maurice Markdown Test')
        .pressKey('enter')
        .typeText(textInput, 'Adventure Items')
        .pressKey('enter')
        .typeText(textInput, '- Adventure Item 1')
        .pressKey('enter')
        .typeText(textInput, '- Adventure Item 2')
        .pressKey('enter')
        .typeText(textInput, '- Adventure Item 3')
})

test("Verify if go to home link works", async t => {
    await t
        .click(adventurePage.link)
})




