import React from 'react';
import Nav from './pages/Nav';
import Home from './pages/Home';
import Results from './pages/Results';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/results/:brand/:model/:year/:miles" component={Results} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
