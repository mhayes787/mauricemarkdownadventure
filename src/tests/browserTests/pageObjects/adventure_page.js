import { Selector, t as browser } from 'testcafe';

export default class AdventurePage {
    constructor() {
        this.title = Selector('#MarkdownPage');
        this.markdowntitle = Selector('#MauriceMarkdown');
        this.previewtitle = Selector('#MauriceOutput');
        this.text = Selector('#EnterTextArea');


    }
    async goToHomePage() {
        await browser
            .click(this.link);
    }

}