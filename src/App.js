/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';
import { applyMiddleware, createStore } from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './rootReducer';
import Toggle from './Toggle';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';

const middleware = [ logger ]

const store = createStore(
  rootReducer, 
  {},
  composeWithDevTools(applyMiddleware(...middleware))
  );

const App = () => (
 <Provider store={store}>
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <Toggle/>
        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route path="/:id" component={MovieDetail} />
        </Switch>
      </div>
    </Router>
 </Provider>
);

export default App;