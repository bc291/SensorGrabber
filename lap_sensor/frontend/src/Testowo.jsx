import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { LineChart, Line, XAxis, YAxis,
         Tooltip, CartesianGrid } from 'recharts';
import Form from "./Form";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import NotFound from "./NotFound"
import { Redirect } from 'react-router';


import Button from '@material-ui/core/Button';


import Readings from './stores/Readings'
import LinearProgress from '@material-ui/core/LinearProgress';
import ReadingsTable from './components/ReadingsTable'
import Auth from './stores/Auth'




export default class Testowo extends Component {


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
  return (
    <div>

    


<ReadingsTable/>



</div>

)
}
}