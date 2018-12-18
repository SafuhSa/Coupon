import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});



// npm install --save webpack webpack-cli react react-dom react-router-dom redux react-redux  redux-logger @babel/core @babel/preset-react @babel/preset-env babel-loader lodash