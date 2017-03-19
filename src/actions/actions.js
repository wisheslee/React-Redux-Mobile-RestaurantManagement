
//constants
export const FETCHING = 'FETCHING';
export const RECEIVE_MENULIST = 'RECEIVE_MENULIST';
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