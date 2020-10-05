import HomePage from './pageObjects/home_page';


const homepage = new HomePage();
const url = 'http://localhost:3000/';

fixture('homepage')
    .page(url);

test('Check Title', async t => {
    await t
        .expect(homepage.title.innerText).eql('Welcome To Maurice Markdown Adventure Page');
})

test('Check Link', async t => {
    await t
        .expect(homepage.link.innerText).eql('Click to proceed to the Adventure')
        .click(homepage.link)

})