import React from 'react';

import Assignments from './Assignments'
import Footer from './Components/Footer'
import SearchAppBar from './Components/SearchAppBar'

export default class Home extends React.Component {
  render() {
    return (
      <div className="App">
          <div className="Header">
              <SearchAppBar id={'this.state.id'}/>
          </div>
          <Assignments />
          <Footer position="relative"/>
      </div>
      );
  }
}