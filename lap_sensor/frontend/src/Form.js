import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import PropTypes from 'prop-types';

export default class Form extends React.Component {
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
/*
  fetch("http://localhost:8000/auth-jwt/", {
  method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  //make sure to serialize your JSON body
  body: JSON.stringify({
    username: this.state.username,
    password: this.state.password
  })
})
.then(response => {
  if (response.ok) {
    response.json().then(json => {
      console.log(json);
    });
  }
});};*/

  render() {
    return (
      <form>
        <TextField
          name="username"
          hintText="Username"
          floatingLabelText="Username"
          value={this.state.username}
          onChange={this.handle_change}
          floatingLabelFixed
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
        />
        <br />
        <RaisedButton label="Submit" onClick={e => this.props.handle_login(e, this.state)} primary />
      </form>
    );
  }
}


Form.propTypes = {
  handle_login: PropTypes.func.isRequired
};