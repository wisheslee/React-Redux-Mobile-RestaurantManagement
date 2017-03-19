/**
 * 定义了最顶层组件,里面包裹一个路由根组件
 */
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../reducers/configureStore.js';
import Router from '../routes/routes.js';
const store = configureStore();
// import { createStore } from 'redux';
// import reducers from '../reducers/reducers.js';
const Root = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)
export default Root;