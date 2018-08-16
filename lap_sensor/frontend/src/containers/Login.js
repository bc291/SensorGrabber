import React, {Component} from 'react'
import { Redirect } from 'react-router'
import Auth from '../stores/Auth'
import Form from '../Form'
import { MuiThemeProvider } from 'material-ui/styles';
import {observer} from 'mobx-react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core/styles';
import ErrorIcon from '@material-ui/icons/Error';


class Login extends Component{

    async componentWillReact()
    {
        console.log("I WILL RE RENDER")
    }

    componentWillMount(){
        Auth.check_if_logged();
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
  style={{ minHeight: '100vh',
  background: 'grey' }}
>
<Grid item xs={3}>


<Card>
        <CardMedia
          image="https://www.w3schools.com/w3css/img_lights.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>

<Form/>

        </CardContent>
      </Card>
      </Grid>   

</Grid> 

        
        </MuiThemeProvider>

         


        </div>

    )
}
}

export default observer(Login);