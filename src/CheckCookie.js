import { useHistory } from "react-router-dom";
import { authenticate } from './Uplink';

export default function CheckCookie(){
    const history = useHistory()
    authenticate().then(state => {
      if(state.valid === true){
        history.push({
          pathname: '/home',
          state: state
        })
      }
    }).catch(error => {
      history.push({
        pathname: '/login'
      })
    })

    return (
        <div>How did you get here?</div>
    )
}

