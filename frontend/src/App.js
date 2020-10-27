import React from 'react';
import RoutePrivate from './utils/private-route';
import RoutePublic from './utils/public-route';
import { Login } from './components/login';
import Main from './components/Main';
import MyError from './components/MyError';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getCurrentUserId } from "./utils/Common";
import MyAccount from "./components/MyAccount";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <RoutePrivate path='/main' component={Main} />
        <RoutePrivate path='/my-account' component={(props) => <MyAccount userId={getCurrentUserId()} history={props.history} />} />
        <RoutePublic path='/login' component={Login} />
        <Route component={MyError} />
      </Switch>
    </Router>
  );
}

export default App;
