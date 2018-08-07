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
injectTapEventPlugin();



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    };
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
          console.log("DUPA");
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
    console.log(this.state.logged_in)
    return (

<MuiThemeProvider>
        <div className="App">
        {this.state.logged_in ? console.log("Zalogowany") : (<Form handle_login={this.handle_login} />)}
          
          <p>
            {JSON.stringify(this.state.fields, null, 2)}
          </p>
          <h3>
          {this.state.logged_in
            ? `Hello, ${this.state.username}`
            : 'Please Log In'}
        </h3>


 <BrowserRouter>
    <Switch>
    <Route exact path="/index" component={Testowo} />
      
    <PrivateRoute exact path="/contact" component={Testowo} />


      <Route component={NotFound} />
    </Switch>
    </BrowserRouter>

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




export default App;