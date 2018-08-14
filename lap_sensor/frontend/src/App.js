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


import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import {observer} from 'mobx-react';


import Readings from './stores/Readings'
import LinearProgress from '@material-ui/core/LinearProgress';
import UpperBar from './components/UpperBar'
import ReadingsTable from './components/ReadingsTable'
import TotalTest from './components/TotalTest'
import MenuLister from './components/MenuLister'
import RightDrawer from './components/RightDrawer'
import Auth from './stores/Auth'


injectTapEventPlugin();


class App extends Component {
  constructor(props) {
    super(props);

    Auth.logged_in = localStorage.getItem('token') ? true : false;
    console.log(Readings.all_users)
  }

  
  componentDidMount() {
    Readings.fetchAll();
    Auth.check_if_logged();
  }


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

    //console.log(all_users)
    return (
      <RightDrawer>
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
          

{Readings.is_loading ? (<LinearProgress color="secondary" />) :
(console.log("Not loading"))
}
<MenuLister/>
<ReadingsTable/>


        </div>
      </div>
</div>
      </MuiThemeProvider>
</RightDrawer>

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