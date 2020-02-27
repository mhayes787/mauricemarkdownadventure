import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/home';
import './App.css';
import MarkdownAventure from './Components/MarkdownAdventure/markdownAdventure';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Home} />;
        <Route exact path='/MauriceMarkdownAdventure' component={MarkdownAventure} />;
      </Router>

    </div>
  );
}

export default App;
