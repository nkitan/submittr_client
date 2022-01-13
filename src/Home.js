import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Button from '@material-ui/core/Button'
import Assignments from './Assignments'
import Footer from './Components/Footer'
import SearchAppBar from './Components/SearchAppBar'
import UserType from './Components/UserType'
import { authenticatr } from './Uplink'


async function handleRefresh(){
  authenticatr('/refresh').then(data => {
    console.log('refreshed!')
  }).catch(error => {
    console.error('an error occured')
  })
}

async function handleAuth(){
  authenticatr('/verify').then(data => {
    console.log('authenticated!')
    return true
  }).catch(error => {
    console.error('an error occured')
    return false
  })
}


function logout(){
  authenticatr('/logout').then(data => {
    console.log(data)
  }).catch(error => {
    console.log(error)
  })
  window.location.href = '/login'
}

async function check() {
  if(!handleAuth()){
    logout()
  }
}

function Home(){
  useEffect(() => {
    check()
    handleRefresh()
  }, []);
 
  setInterval(check, 60000);
  setInterval(handleRefresh, (4 * 60000) + 40000)

  try{
    const location = useLocation()
    const id = location.state.id
    const username = location.state.username
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
              <SearchAppBar username={username}/>
          </div>
              <Button onClick={()=> handleRefresh() } color="secondary" type="contained">
                  Refresh
              </Button>
              <Button onClick={()=> {if(!handleAuth()){logout()}} } color="secondary" type="contained">
                  Authenticate
              </Button>
              <Button onClick={()=> logout()} color="secondary" type="contained">
                  Logout
              </Button>
          <Assignments state={location.state}/>
          <UserType usertype={usertype} userid={id}/>
          <Footer position="relative"/>
      </div>
    );
  } catch(error) {
    logout()
  }
}

export default Home