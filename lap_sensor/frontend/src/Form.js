import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import Auth from './stores/Auth'
import Notifier from './components/Notifier'

class Form extends React.Component {

  state = {
    username: "",
    password: ""
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    console.log(Auth.error_message)
    let message = 'Login error! Bad credentials?'
    let type = 'error'
    return (
      
      <form>
        <Notifier message={message} snackbarType={type}/>
        <TextField
          name="username"
          hintText="Username"
          floatingLabelText="Username"
          value={this.state.username}
          onChange={this.handle_change}
          floatingLabelFixed
          fullWidth
        />
        <br />
        <br />
        <TextField
          name="password"
          hintText="Password"
          floatingLabelText="Password"
          value={this.state.password}
          onChange={this.handle_change}
          type="password"
          floatingLabelFixed
          fullWidth
        />
        <br />
        <RaisedButton label="Submit" onClick={Auth.login.bind(Auth, this.state)} primary />
      </form>
    );
  }
}

export default observer(Form);
/*
<RaisedButton label="Submit" onClick={e => this.props.handle_login(e, this.state)} primary />
Form.propTypes = {
  handle_login: PropTypes.func.isRequired
};

*/
