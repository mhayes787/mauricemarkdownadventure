import React, { Component } from 'react';
import { Link } from 'react-router-dom'

//Design for this component only
import './markdownAdventure.scss';


let marked = require("marked");

class MarkdownAdventure extends Component {

    state = {
        markdown: ""
    }

    updateMarkdown = function (markdown) {
        this.setState({ markdown });
    }
    render() {
        let { markdown } = this.state

        return (
            <div className="mdAdventure">
                <div className="container">
                    <div className="row mt-4">
                        <div className="col text-center">
                            <h1 id="MarkdownPage">Maurice Markdown Adventure</h1>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div>

                        <div className="row mt-4">
                            <div className="col-md-6">
                                <h4 id="MauriceMarkdown">Maurice Markdown</h4>
                                <textarea id="EnterTextArea" className="textArea" placeholder="Enter Markdown" value={markdown} onChange={(event) => this.updateMarkdown(event.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <h4 id="MauriceOutput">Maurice Output</h4>
                                <div id="MarkdownText" className=" textArea" dangerouslySetInnerHTML={{ __html: marked(markdown) }}>

                                </div>

                            </div>
                            <div>
                                <Link id="HomeURL" to="/">Click here for Home page</Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div >

        );
    }
}
export default MarkdownAdventure