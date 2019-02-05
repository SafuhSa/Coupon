import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import ProductIndexContainer from './products/product_index_container';
import ProductShowContainer from './products/show_container';
import EditProductContainer from './products/edit_container';
import CreateProductContainer from './products/create_container';
import CartShowContainer from './products/cart_container';
import SearchResultContainer from './greeting/search_result_container';
import RecentViewsContainer from "./greeting/recent_view_container";
import LocationContainer from "./greeting/location_container";

import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import greeting_container from './greeting/greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
      <GreetingContainer />

    <Switch> 
    <AuthRoute exact path="/login" component={LogInFormContainer} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    <ProtectedRoute exact path="/product/new" component={CreateProductContainer} />
      <Route exact path="/products/:productId" component={ProductShowContainer} />
    <ProtectedRoute exact path="/cart" component={CartShowContainer} />
    <ProtectedRoute exact path="/products/:productId/edit" component={EditProductContainer} />
      <Route exact path="/search" component={SearchResultContainer} />
    <Route exact path="/" component={ProductIndexContainer} />
      <Route exact path="/recentViews" component={RecentViewsContainer} />
      <Route path="/city" component={RecentViewsContainer} />


    </Switch>
  </div>
);

export default App;