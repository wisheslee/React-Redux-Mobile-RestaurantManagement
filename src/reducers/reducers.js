/**
 * 这个文件夹汇总整个应用中所有的reducer
 */

// import { CombineReducers } from 'redux';
//这一步是引入constants
import { FETCHING, RECEIVE_MENULIST } from '../actions/actions.js';
//reducers
export default function posts(state = {
  isFetching: false
}, action) {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_MENULIST:
      return Object.assign({}, state, {
        isFetching: false,
        menuList: action.data
      })
    default:
      return state
  }
}