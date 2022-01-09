import React from 'react';
import { useLocation } from "react-router-dom";

import Assignments from './Assignments'
import Footer from './Components/Footer'
import SearchAppBar from './Components/SearchAppBar'
import UserType from './Components/UserType'

function Home(){
  const location = useLocation()
  const id = location.state.id
  const isAdmin = location.state.isAdmin
  const isTeacher = location.state.isTeacher
  let usertype = ""

  if(isAdmin){
    usertype += "| Admin |"
  }

  if(isTeacher){
    usertype += "| Teacher |"
  }

  return (
    <div className="App">
        <div className="Header">
            <SearchAppBar id={id}/>
        </div>
        <Assignments />
        <UserType usertype={usertype}/>
        <Footer position="relative"/>
    </div>
  );
}

export default Home