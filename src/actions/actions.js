
//constants
export const FETCHING = 'FETCHING';
export const RECEIVE_MENULIST = 'RECEIVE_MENULIST';
export const ADD_FOOD = 'ADD_FOOD';
export const MINUS_FOOD = 'MINUS_FOOD';
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
export function addFood(food, price) {
  return {
    type: ADD_FOOD,
    food,
    price
  }
}
export function minusFood(food) {
  return {
    type: MINUS_FOOD,
    food
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