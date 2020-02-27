import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Application Components
import Home from './Components/Home/home';
import MarkdownAdventure from './Components/MarkdownAdventure/markdownAdventure';

//Design for whole application
import './App.css';

function App() {
  return (
    //Routing purposes
    <div className="App">
      <Router>
        <Route exact path='/' component={Home} />;
        <Route exact path='/MauriceMarkdownAdventure' component={MarkdownAdventure} />;
      </Router>

    </div>
  );
}

export default App;
