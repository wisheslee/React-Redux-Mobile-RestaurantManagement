import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from '../views/App.js';
import Order from '../views/Order.js';
import OrderManagement from '../views/OrderManagement.js';
import TableManagement from '../views/TableManagement.js';
const Routes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={OrderManagement} />
      <Route path='order' component={Order} />
      <Route path='table' component={TableManagement} />
    </Route>
  </Router>
)
export default Routes;