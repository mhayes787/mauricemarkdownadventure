import { Selector, t as browser } from 'testcafe';

export default class HomePage {
    constructor() {
        this.title = Selector('#Welcome');
        this.link = Selector('#Link');
    }


    async goToAdventurePage() {
        await browser
            .click(this.link);
    }
}