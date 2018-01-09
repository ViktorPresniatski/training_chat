import React from 'react';
import './stylesheets/index.css';
import App from './javascripts/App.jsx';
import configureStore from './javascripts/store/configureStore';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

const store = configureStore();

render(
  <Provider store={store}>
     <App />
  </Provider>,
  document.getElementById('root')
);

