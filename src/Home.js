import React from 'react';
import { Redirect, useLocation } from "react-router-dom";
import Button from '@material-ui/core/Button'

import Assignments from './Assignments'
import Footer from './Components/Footer'
import SearchAppBar from './Components/SearchAppBar'
import UserType from './Components/UserType'
import { refreshToken, authenticate } from './Uplink'

function Home(){
  async function handleRefresh(){
    refreshToken().then(data => {
      console.log('refreshed!')
    }).catch(error => {
      console.log(error)
    })
  }

  async function handleAuth(){
    authenticate().then(data => {
      console.log('authenticated!')
    }).catch(error => {
      console.log(error)
    })
  }

  try{
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
          <Button onClick={()=> handleRefresh() } color="secondary" type="contained">
                  Refresh
              </Button>
              <Button onClick={()=> handleAuth() } color="secondary" type="contained">
                  Authenticate
              </Button>
          <Assignments />
          <UserType usertype={usertype}/>
          <Footer position="relative"/>
      </div>
    );
  } catch(error) {
    return <Redirect to='/login'></Redirect>
  }
}

export default Home