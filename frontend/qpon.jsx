import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import merge from "lodash/merge";

document.addEventListener('DOMContentLoaded', () => {
  let store;
  let location;
  if (localStorage.loc) {
    location = { 'city': localStorage.city, 'loc': localStorage.loc }
  } else {
    location = {};
  }

  if (window.currentUser) {
    const preloadedState = {
      session: merge({ id: window.currentUser.id }, location),
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    const preloadedState = {
      session: merge(location)
      }
    store = configureStore(preloadedState);
  }
  window.store = store
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});