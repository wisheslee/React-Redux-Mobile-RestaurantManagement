/**
 * 这个文件夹汇总整个应用中所有的reducer
 * 使用combineReducer
 */

import { combineReducers } from 'redux';
//这一步是引入constants
import { FETCHING, RECEIVE_MENULIST, RECEIVE_TABLELIST, ADD_FOOD, MINUS_FOOD, NEW_ORDER, ORDER_ADD_MENU, CLEAR_ORDER, COMFIRM_ORDER, CHECK_OUT } from '../actions/actions.js';
//reducers
import initState from '../actions/menuList.json';
let initState1 = [];
for (let item of initState) {
  initState1 = initState1.concat(item.content)
}
function posts(state = {
  isFetching: false,
  menuList: [],
  tableList: []
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
    case RECEIVE_TABLELIST:
      return Object.assign({}, state, {
        isFetching: false,
        tableList: action.data
      })

    default:
      return state
  }
}
//所以从服务器端获取数据也是一样的,在reducers之前获取,然后传给state作为初始值就可以了
const orderList = JSON.parse(sessionStorage.getItem('handleOrder')) || {};
function handleOrder(state = orderList, action) {

  switch (action.type) {
    case NEW_ORDER:
      const num = action.data[0];
      const temp = Object.assign({}, state, {
        [num]: {
          people: action.data[1],
          data: [],
          status: false
        }
      })
      //将数据存在sessionStorage
      sessionStorage.setItem('handleOrder', JSON.stringify(temp));
      return temp;
    case ORDER_ADD_MENU:
      return Object.assign({}, state, {
        [action.num]: {
          people: state[action.num].people,
          data: JSON.parse(JSON.stringify(action.data)),
          status: false
        }
      })
    case ADD_FOOD:
      let temp2 = state[action.orderNum].data.slice();
      for (let item of temp2) {
        if (item.title === action.kind) {
          for (let item1 of item.content) {
            if (item1.title === action.food) {
              item1.num++;
              break;
            }
          }
        }
      }
      return Object.assign({}, state, {
        [action.orderNum]: {
          people: state[action.orderNum].people,
          data: temp2,
          status: false
        }
      })
    case MINUS_FOOD:
      let temp1 = state[action.orderNum].data.slice();
      for (let item of temp1) {
        if (item.title === action.kind) {
          for (let item1 of item.content) {
            if (item1.title === action.food) {
              item1.num--;
              break;
            }
          }
        }
      }
      return Object.assign({}, state, {
        [action.orderNum]: {
          people: state[action.orderNum].people,
          data: temp1,
          status: false
        }
      })
    case CLEAR_ORDER:
      let temp3 = state[action.orderNum].data.slice();
      for (let item of temp3) {
        for (let item1 of item.content) {
          if (item1.num !== 0) {
            item1.num = 0
          }
        }
      }
      return Object.assign({}, state, {
        [action.orderNum]: {
          people: state[action.orderNum].people,
          data: temp3,
          status: false
        }
      })
    case COMFIRM_ORDER:
      let temp4 = Object.assign({}, state, {
        [action.orderNum]: {
          people: state[action.orderNum].people,
          data: state[action.orderNum].data,
          status: true,
          date: action.date,
          num: action.orderNum
        }
      })
      sessionStorage.setItem('handleOrder', JSON.stringify(temp4));
      return temp4;
    case CHECK_OUT:
      let temp5 = Object.assign({}, state);
      delete temp5[action.orderNum];
      return temp5;
    default:
      return state
  }
}
export default combineReducers({
  posts, handleOrder
})