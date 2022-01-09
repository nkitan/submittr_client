import React from 'react'

import Home from './Home'
import Login from './Login'
import './css/App.css'

import { Route, Switch, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/failedlogin">
            <FailedLogin />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

function NotFound () {
    return (
    <div>
      <h1 style={{margin: 'auto', fontSize: 74, fontFamily: 'sans-serif'}}>Not found!</h1>
      <p>Sorry your page was not found!</p>
    </div>
  );
}

function FailedLogin () {
  return (
  <div>
      <h1 style={{margin: 'auto', fontSize: 74, fontFamily: 'sans-serif'}}>Invalid User!</h1>
      <p>check credentials</p>
  </div>
  );
}

export default App;
