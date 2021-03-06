import React from 'react'
import Home from './Home'
import Login from './Login'
import CheckCookie from './CheckCookie'
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
          <Route path="/">
            <CheckCookie />
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

export default App;
