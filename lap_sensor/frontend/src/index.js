import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import './normalize.css';
import './fonts/font-awesome-4.2.0/css/font-awesome.min.css';
import App from './App';
import { Router, Switch, Route } from 'react-router'
import api_endpoints from './api_endpoints'
import Home from './containers/Home'
import registerServiceWorker from './registerServiceWorker';
import history from './services/history'
import Login from './containers/Login'


ReactDOM.render(<App>
    <Router history={history}>
 <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path={api_endpoints.login_page} component={Login} />
                </Switch>
                </Router>
</App>, document.getElementById('root'));
registerServiceWorker();


/*
                    <Route path={api_endpoints.login} component={LoginContainer} />
                    <Route path={routes.sign_up} component={RegisterContainer} />
                    <Route path={routes.users} component={UserListContainer} />

                    */