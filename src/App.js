import React from 'react'

import Home from './Home'
import Login from './Login'
import './css/App.css'

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Login />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
