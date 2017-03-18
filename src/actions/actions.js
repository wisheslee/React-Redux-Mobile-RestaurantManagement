
//constants
export const REQUEST_POSTS = 'REQUEST_POSTS';

//action creator
export function requestPosts() {
  return {
    type: REQUEST_POSTS
  }
}
export function fetchMenuList() {
  return dispatch => {
    dispatch(requestPosts())
  }
}