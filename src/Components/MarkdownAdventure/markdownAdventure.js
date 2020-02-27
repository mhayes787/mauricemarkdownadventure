import React, { Component } from 'react';
//Design for this component only
import './markdownAdventure.scss';


class MarkdownAdventure extends Component {
    render() {
        return (
            <div className="mdAdventure">
                <div className="container">
                    <div className="row mt-4">
                        <div className="col text-center">
                            <h1>Maurice Markdown Adventure</h1>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h4>Maurice Markdown</h4>
                            <textarea className="textArea" />
                        </div>
                        <div className="col-md-6">
                            <h4>Maurice Output</h4>
                            <textarea className="textArea" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default MarkdownAdventure