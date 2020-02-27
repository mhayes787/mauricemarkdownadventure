import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/home';
import './App.css';
import MarkdownAdventure from './Components/MarkdownAdventure/markdownAdventure';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Home} />;
        <Route exact path='/MauriceMarkdownAdventure' component={MarkdownAdventure} />;
      </Router>

    </div>
  );
}

export default App;
