import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Design for this component only
import './home.scss';


class Home extends Component {
    render() {
        return (
            <div className="homeBody">
                <h1>Welcome To Maurice Markdown Adventure Page</h1>
                <Link to="/MauriceMarkdownAdventure">Click to proceed to the Adventure</Link>
            </div >
        );
    }
}

export default Home