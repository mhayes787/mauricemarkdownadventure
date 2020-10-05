import { Selector, t as browser } from 'testcafe';

export default class AdventurePage {
    constructor() {
        this.title = Selector('#MarkdownPage');
        this.mauriceMarkdownTitle = Selector('#MauriceMarkdown');
        this.mauriceOutputTitle = Selector('#MauriceOutput');
        this.textArea = Selector('#EnterTextArea');
        this.link = Selector('#HomeURL');

    }
    async goToHomePage() {
        await browser
            .click(this.link);
    }

}