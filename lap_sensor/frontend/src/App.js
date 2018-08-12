import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { LineChart, Line, XAxis, YAxis,
         Tooltip, CartesianGrid } from 'recharts';
import Form from "./Form";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Testowo from "./Testowo"
import NotFound from "./NotFound"
import { Redirect } from 'react-router';
import SideBar from './Header';


import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import {observer} from 'mobx-react';



import Readings from './stores/Readings'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';


import Auth from './stores/Auth'


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});


injectTapEventPlugin();


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    };

    Auth.logged_in = localStorage.getItem('token') ? true : false;
  }

  showSettings (event) {
    event.preventDefault();
  }


  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  
  componentDidMount() {
    if (this.state.logged_in) {
      fetch('http://localhost:8000/sensor/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
    Readings.fetchAll();
    Auth.check_if_logged();
  }


  handle_login = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/auth-jwt/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if(res.status === 400)
        {
          throw new Error('Something went wrong');
        }
        return res.json()     
      })
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.user.username
        })
      }).catch(error => this.setState({
        logged_in: false
    }));
  };


  handle_logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    this.setState({logged_in: false})
  };

  PrivateRoute = ({component: ChildComponent, ...rest}) => {
    return <Route {...rest} render={props => {
       if (!this.state.logged_in) {
        return <Redirect to="/login" />;
      } else {
        return <ChildComponent {...props} />
      }
    }} />
  }

  render() {
    let {PrivateRoute} = this;
    var {all_users} = Readings
    console.log(all_users)
    return (
<MuiThemeProvider>
        <div className="App">
        
<div id="outer-container" style={{height: '100%'}}>

        <div id="page-wrap">
          <p>Lap sensor</p>
          {Auth.logged_in ? (<p>Hi {Auth.username}</p>) :
        (<p>Not logged in </p>)}
          <Button variant="contained" color="primary" onClick={Auth.login.bind(Auth, {username: "admin",
                                                                                      password: "koza1994"})}>
          Login v2
          </Button>

          <Button variant="contained" color="primary" onClick={Readings.fetchAll}>
          Get all readings
          </Button>


          <Button variant="contained" color="primary" onClick={Auth.check_if_logged}>
          Test
          </Button>
          <BrowserRouter>
       <Switch>
    <Route exact path="/index" component={Testowo} />
      
    <PrivateRoute exact path="/contact" component={Testowo} />


      <Route component={NotFound} />
    </Switch>
        </BrowserRouter>
        {console.log(Auth.logged_in)}

            {!Auth.logged_in ? (<Form/>) :
          
          <SideBar handle_logout={this.handle_logout}/>
          }
          

{Readings.is_loading ? (<LinearProgress color="secondary" />) :
(console.log("Not loading"))
}

            <Paper >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Location</TableCell>
            <TableCell numeric>Value</TableCell>
            <TableCell>Created at</TableCell>
            <TableCell numeric>Sensor</TableCell>
            <TableCell numeric>Id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {all_users.map(reading => {
            return (
              <TableRow key={reading.id}>
                <TableCell component="th" scope="row">
                  {reading.name}
                </TableCell>
                <TableCell>{reading.location}</TableCell>
                <TableCell numeric>{reading.value}</TableCell>
                <TableCell>{reading.created_at}</TableCell>
                <TableCell numeric>{reading.gsensor}</TableCell>
                <TableCell numeric>{reading.id}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>


        </div>
      </div>

        </div>
      </MuiThemeProvider>


    );
  }



}


/*
      <Route exact path="/index" render={
        ()=>(this.state.logged_in ? (<Testowo/>) : 
        (<Redirect to="/login" />))
      } />


 
*/




export default observer(App);



/*
          {!this.state.logged_in ? (<Form handle_login={this.handle_login}/>) :
          
          <SideBar handle_logout={this.handle_logout}/>
          }


          */