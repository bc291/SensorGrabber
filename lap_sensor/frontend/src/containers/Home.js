import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import api_endpoints from '../api_endpoints'
import Auth from '../stores/Auth'
import { Redirect } from 'react-router';
import Button from '@material-ui/core/Button'
import {observer} from 'mobx-react';

class Home extends Component{

    handle_logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        Auth.logged_in = false;
      };

render(){

    if (!Auth.logged_in)
    {
       return <Redirect to='/login'/>;
    }


return(
     <div className="ut__home">
            <h2>Welcome to Test app</h2>
            <section className="ut__btn-group">
                <Link className="ut__button" to={api_endpoints.login_page}>Sign in</Link>
                
            </section>
            <Button onClick={this.handle_logout}>Sign out</Button>

        </div>
)
}

}
export default observer(Home);