import React from 'react';
import { Router, Route, IndexRedirect, IndexRoute, browserHistory } from 'react-router';
import App from '../views/App.js';
import Order from '../views/Order.js';
import OrderManagement from '../views/OrderManagement.js';
import TableManagement from '../views/TableManagement.js';
import MenuManament from '../views/MenuManagement.js';
const Routes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Order} />
      <Route path='order' component={OrderManagement} />
      <Route path='table' component={TableManagement} />
      <Route path='menu' component={MenuManament} />
    </Route>
  </Router>
)
export default Routes;