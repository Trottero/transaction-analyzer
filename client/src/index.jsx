import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import './styles/index.scss';

import reducers from './modules';
import App from './App';

const middleware = routerMiddleware();
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk, middleware)),
);

/* eslint-disable-next-line no-undef */
render(
  (
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>
  ), document.getElementById('root'),
);
