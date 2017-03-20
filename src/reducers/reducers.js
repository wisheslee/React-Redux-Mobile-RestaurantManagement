/**
 * 这个文件夹汇总整个应用中所有的reducer
 * 使用combineReducer
 */

import { combineReducers } from 'redux';
//这一步是引入constants
import { FETCHING, RECEIVE_MENULIST, ADD_FOOD, MINUS_FOOD } from '../actions/actions.js';
//reducers
import initState from '../actions/menuList.json';
let initState1 = [];
for (let item of initState) {
  initState1.concat(item.content)
}
function operateFood(state = [], action) {
  let flag = false;
  let temp = state.slice();
  switch (action.type) {
    case ADD_FOOD:
      for (let item of temp) {
        if (item.title === action.food) {
          item.num++;
          flag = true;
          break;
        }
      }
      if (flag) {
        return temp
      } else {
        temp.push({
          "title": action.food,
          "num": 1,
          "price": action.price,
        })
        return temp;
      }
    case MINUS_FOOD:
      temp.forEach((item, index) => {
        if (item.title === action.food) {
          item.num--;
          if (item.num === 0) {
            temp.splice(index, 1)
          }
        }
      })
      return temp;
    default:
      return state
  }
}
function posts(state = {
  isFetching: false,
  menuList: []
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
export default combineReducers({
  operateFood, posts
})