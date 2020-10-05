import { Selector, t as browser } from 'testcafe';

export default class HomePage {
    constructor() {
        this.title = Selector('#WelcomePage');
        this.link = Selector('#Link');
    }

    async goToAdventurePage() {
        await browser
            .click(this.link);
    }
}