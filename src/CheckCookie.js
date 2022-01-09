import { useHistory } from "react-router-dom";
import { submittr_host, authenticatr_port } from './Config';
import { call } from './Uplink';

function verifyUser(history){
    call(submittr_host + authenticatr_port + '/auth/verify', 'GET', { 'Content-Type': 'application/json'}, "")
    .then(response => {
      response = JSON.parse(JSON.stringify(response))
      if(response.valid === true){
        history.push({
          pathname: '/home',
          state: {id: response.id, isAdmin: response.isAdmin, isTeacher: response.isTeacher},
        })  
      } 
    }).catch(error => {
      // Route to login with invalid credentials warning
      // TODO get failed login to work
      history.push({
        pathname: '/login',
        state: {status: "invalid password!"},
      })
    })
}

export default function CheckCookie(){
    const history = useHistory()
    verifyUser(history)

    return (
        <div>How did you get here?</div>
    )
}

