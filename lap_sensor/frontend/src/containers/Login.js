import React, {Component} from 'react'
import { Redirect } from 'react-router'
import Auth from '../stores/Auth'
import Form from '../Form'
import { MuiThemeProvider } from 'material-ui/styles';
import {observer} from 'mobx-react';
import Grid from '@material-ui/core/Grid';

class Login extends Component{

    async componentWillReact()
    {
        console.log("I WILL RE RENDER")
    }



    render()
    {
        if(Auth.logged_in)
        {
            return <Redirect to='/'></Redirect>
        }
    
    
    return(
        <div>
            <MuiThemeProvider>
            <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '100vh' }}
>
<Grid item xs={3}>
    <Form/>
  </Grid>   

</Grid> 

        
        </MuiThemeProvider>
        </div>

    )
}
}

export default observer(Login);