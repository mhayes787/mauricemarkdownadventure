import React, { Component } from 'react';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';


//Design for this component only
import './markdownAdventure.scss';

let marked = require("marked");

class MarkdownAdventure extends Component {

    state = {
        markdown: ""
    }

    updateMarkdown = function (markdown) {
        this.setState({ markdown })
    }
    render() {
        let { markdown } = this.state

        return (
            <div className="container">
                <div className="textArea">
                    <FormGroup controlId="formControlsTextarea">
                        <FormLabel>Markdown Input</FormLabel>
                        <FormControl componentClass="textarea" placeholder="Enter Markdown" value={markdown} onChange={(event) => this.updateMarkdown(event.target.value)}></FormControl>
                    </FormGroup>
                </div>
                <div className="textarea">
                    <h1>Markdown Output</h1>
                    <div>
                        {marked(markdown)}
                    </div>
                </div>
            </div>

        );
    }
}

//MarkDown 
// import ReactMarkDown from 'react-markdown';


// class MarkdownAdventure extends Component {
//     render() {
//         return (
//             <div className="mdAdventure">
//                 <div className="container">
//                     <div className="row mt-4">
//                         <div className="col text-center">
//                             <h1>Maurice Markdown Adventure</h1>
//                         </div>
//                     </div>

//                     <div className="row mt-4">
//                         <div className="col-md-6">
//                             <h4>Maurice Markdown</h4>
//                             <textarea className="textArea" />
//                         </div>
//                         <div className="col-md-6">
//                             <h4>Maurice Output</h4>
//                             <div className="textArea">

//                             </div>
//                             {/* <textarea className="textArea">
//                                 {{markdown}}</textarea>> */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
export default MarkdownAdventure