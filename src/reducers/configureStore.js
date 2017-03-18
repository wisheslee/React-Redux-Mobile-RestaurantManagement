/**
 * 创建一个新的createStore函数,可以应用中间件
*/
import { createStore, applyMiddleware } from 'redux';
//这个中间件可以让dispatch接受一个函数,在里面就可以做异步操作
import thunkMiddleware from 'redux-thunk';
import rootRuducer from './reducers.js';
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootRuducer, initialState);
}
