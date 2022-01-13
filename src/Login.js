import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Card from '@material-ui/core/Card'
import { submittr_host, authenticatr_port } from './Config';
import { authenticatr, call } from './Uplink';

import { useState } from 'react';
import './css/Login.css'
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  inputWrapper: {
    backgroundColor: theme.palette.primary.main,
    text: theme.palette.secondary.main,
    opacity: 0.9,
    alignItems: 'center',
    borderRadius: theme.spacing(1),
    maxWidth: 500,
    maxHeight:300,
    position: 'relative',
    margin: 'auto',
  },

  Login: {
    paddingBottom: '100%',
    alignContent: 'center',
    alignText: 'center',
    backgroundColor: theme.palette.primary.light,
    backgroundSize: 'inherit',
    size: 'inherit',
  }
}));

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const classes = useStyles();

    function validateForm() {
      return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
      call(submittr_host + authenticatr_port + '/auth/login', 'POST', { 'Content-Type': 'application/json' }, { "username" : username , "password" : password})
      .then(response => { 
        authenticatr('/verify').then(state => {
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
      }).catch(error => {
        console.log(error)
      })
      event.preventDefault();
    }

    return (
        <div className={classes.Login}>
          <Typography align='center' variant="h5">Log into Submittr</Typography>
            <form onSubmit={handleSubmit}>
              <Card className={classes.inputWrapper}>
                <CardContent>
                  <Input size="lg"
                    controlid="username"
                    autoFocus
                    type="username"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </CardContent>
                <CardContent>
                  <Input size="lg" 
                      controlid="password"
                      type="password"
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} 
                  />
              </CardContent>
              <CardActions>
                <Button variant="contained" size="medium" type="submit" color="secondary" disabled={!validateForm()}>
                  Login
                </Button>
              </CardActions>
              </Card>
            </form>
        </div>
    )
}
