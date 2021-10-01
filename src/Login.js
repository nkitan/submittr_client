import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Card from '@material-ui/core/Card'

import { useState } from 'react';
import './css/Login.css'


const useStyles = makeStyles((theme) => ({
  inputWrapper: {
    backgroundColor: theme.palette.primary.main,
    text: theme.palette.secondary.main,
    opacity: 0.9,
    alignItems: 'center',
    borderRadius: theme.spacing(1),
  }
}));

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const classes = useStyles();

    function validateForm() {
      return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        alert('Username: ' + username + '\nPassword: ' + password)        
        event.preventDefault();
    }


      return (
          <div class="Login">
            <Typography variant="h5">Log into Submittr</Typography>
              <form onSubmit={handleSubmit}>
                <Card className={classes.inputWrapper}>
                  <CardContent>
                    <Input size="lg"
                      controlId="username"
                      autoFocus
                      type="username"
                      placeholder="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </CardContent>
                  <CardContent>
                    <Input size="lg" 
                        controlId="password"
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
