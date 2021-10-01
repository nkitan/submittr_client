import Assignments from './Assignments'
import Footer from './Footer'
import SearchAppBar from './SearchAppBar'

import React from 'react';
import './css/App.css';


function App() {
  return (
    <div class="App"> 
    <div class="Header">
      <SearchAppBar />
    </div>
      <Assignments />
      <Footer position="relative"/>
    </div>
  );
}

export default App;
