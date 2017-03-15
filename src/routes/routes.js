import React from 'react';
import { Router, Route, IndexRedirect, IndexRoute, browserHistory } from 'react-router';
import App from '../layouts/App.js';
import Home from '../views/Home.js';
import Consult from '../views/Consult.js';
import Record from '../views/Record.js';
import MyCenter from '../views/MyCenter.js';
const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='consult' component={Consult} />
      <Route path='record' component={Record} />
      <Route path='mycenter' component={MyCenter} />
    </Route>
  </Router>
)
export default routes;