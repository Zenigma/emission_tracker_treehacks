import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Results from './components/Results';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/results" component={Results} />
      </Switch>
    </Router>
  );
}

export default App;
