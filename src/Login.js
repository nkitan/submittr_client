import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Card from '@material-ui/core/Card'
import { authenticatr_host } from './Config';
import { requestUplink } from './Uplink';

import { useState } from 'react';
import './css/Login.css'
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Home';


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
    backgroundColor: theme.palette.secondary.light,
    backgroundSize: 'inherit',
    size: 'inherit',
  }
}));

function handleSubmit(event) {
  requestUplink(authenticatr_host + '/verify', {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5OGZhODM5LTZkZTQtNDEwNS04NDZhLTU3MDNhMTM0MjYyMyIsImlhdCI6MTYzMzEwOTUwMSwiZXhwIjoxNjMzMTExMzAxfQ.rixXolWLFGAWD3LoKhTaxmdaqYwYdDC_fc0m3Up57L4"
  }).then(response => {
    response = JSON.parse(JSON.stringify(response))
    
    if(response.valid === true){
      console.log(response.valid);
      <Route path={Home} />
    }
  })

  event.preventDefault();
}

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const classes = useStyles();

    function validateForm() {
      return username.length > 0 && password.length > 0;
    }

      return (
          <div className={classes.Login}>
            <Typography variant="h5">Log into Submittr</Typography>
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
