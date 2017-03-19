/**
 * 创建一个新的createStore函数,可以应用中间件
*/
import { createStore, applyMiddleware, compose } from 'redux';
//这个中间件可以让dispatch接受一个函数,在里面就可以做异步操作
import thunkMiddleware from 'redux-thunk';
import rootRuducer from './reducers.js';
import DevTools from '../views/DevTools.js';
//引入异步中间件和redux开发工具,使用compose方法
const createStoreWithMiddleware = compose(
  applyMiddleware(thunkMiddleware),
  DevTools.instrument()
)(createStore);
export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootRuducer, initialState);
}
