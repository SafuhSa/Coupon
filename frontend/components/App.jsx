import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import IndexContainer from './greeting/index_container';

import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import greeting_container from './greeting/greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
      <GreetingContainer />
    {/* <Switch>  */}

    <AuthRoute exact path="/" component={IndexContainer} />
    <AuthRoute exact path="/login" component={LogInFormContainer} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    {/* </Switch> */}
  </div>
);

export default App;
