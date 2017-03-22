
//constants
export const FETCHING = 'FETCHING';
export const RECEIVE_MENULIST = 'RECEIVE_MENULIST';
export const RECEIVE_TABLELIST = 'RECEIVE_TABLELIST';
export const ADD_FOOD = 'ADD_FOOD';
export const MINUS_FOOD = 'MINUS_FOOD';
export const NEW_ORDER = 'NEW_ORDER';
export const ORDER_ADD_MENU = 'ORDER_ADD_MENU';
export const CLEAR_ORDER = 'CLEAR_ORDER';
export const COMFIRM_ORDER = 'COMFIRM_ORDER';
export const CHECK_OUT = 'CHECK_OUT';
//action creator
export function fetching() {
  return {
    type: FETCHING
  }
}
export function receiveMenuList(data) {
  return {
    type: RECEIVE_MENULIST,
    data
  }
}
export function receiveTableList(data) {
  return {
    type: RECEIVE_TABLELIST,
    data
  }
}
export function addFood(food, price, kind, orderNum) {
  return {
    type: ADD_FOOD,
    food,
    price,
    kind,
    orderNum
  }
}
export function minusFood(food, price, kind, orderNum) {
  return {
    type: MINUS_FOOD,
    food,
    price,
    kind,
    orderNum
  }
}
export function newOrder(data) {
  return {
    type: NEW_ORDER,
    data
  }
}
export function orderAddMenu(data, num) {
  return {
    type: ORDER_ADD_MENU,
    data,
    num
  }
}
export function clearOrder(orderNum) {
  return {
    type: CLEAR_ORDER,
    orderNum
  }
}
export function comfirmOrder(orderNum, date) {
  return {
    type: COMFIRM_ORDER,
    orderNum,
    date
  }
}
export function checkOut(orderNum) {
  return {
    type: CHECK_OUT,
    orderNum
  }
}
//创建一个异步的action,先dispatch一个loading状态,再dispatch请求
export function fetchMenuList() {
  return dispatch => {
    dispatch(fetching());
    fetch('/data/menuList.json')
      .then(res => res.json())
      .then(json => {
        setTimeout(function () {
          dispatch(receiveMenuList(json))
        }, 300)
      })
  }
}
export function fetchTableList() {
  return dispatch => {
    dispatch(fetching());
    fetch('/data/tableList.json')
      .then(res => res.json())
      .then(json => {
        setTimeout(function () {
          dispatch(receiveTableList(json))
        }, 300)
      })
  }
}