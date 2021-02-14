import React from 'react';
import Home from './pages/Home';
import Results from './pages/Results';
import About from './pages/About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/results/:brand/:model/:year/:miles" component={Results} />
        <Route path="/results" component={Results} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
