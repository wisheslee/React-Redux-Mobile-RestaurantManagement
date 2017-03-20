/**
 * 这个文件夹汇总整个应用中所有的reducer
 * 使用combineReducer
 */

import { combineReducers } from 'redux';
//这一步是引入constants
import { FETCHING, RECEIVE_MENULIST, ADD_FOOD, MINUS_FOOD } from '../actions/actions.js';
//reducers
const orderInitState = [
  {
    name: '火爆黄喉',
    num: 0,
    price: 40
  }
  , {
    name: '火爆虾',
    num: 0,
    price: 50
  }
  , {
    name: '卤翅膀',
    num: 0,
    price: 30
  }
  , {
    name: '卤鸭脖子',
    num: 0,
    price: 30
  }
  , {
    name: '脑花',
    num: 0,
    price: 50
  }
  , {
    name: '青椒玉米',
    num: 0,
    price: 45
  }
  , {
    name: '小龙虾',
    num: 0,
    price: 80
  }
  , {
    name: '鸭脑壳',
    num: 0,
    price: 30
  }
  , {
    name: '干拌千层肚',
    num: 0,
    price: 30
  }
  , {
    name: '卤鸡脚',
    num: 0,
    price: 50
  }
  , {
    name: '啤酒',
    num: 0,
    price: 45
  }
  , {
    name: '土豆烧排骨',
    num: 0,
    price: 30
  }
  , {
    name: '煮花生',
    num: 0,
    price: 20
  }
  , {
    name: '孜然土豆片',
    num: 0,
    price: 45
  }
  , {
    name: '炝炒油菜',
    num: 0,
    price: 15
  }
  , {
    name: '蒜苗豆干',
    num: 0,
    price: 16
  }
  , {
    name: '干锅虾',
    num: 0,
    price: 50
  }
  , {
    name: '红烧肉',
    num: 0,
    price: 30
  }
  , {
    name: '火爆鸭舌',
    num: 0,
    price: 60
  }
  , {
    name: '火爆腰花',
    num: 0,
    price: 30
  }
  , {
    name: '辣子鸡',
    num: 0,
    price: 80
  }
  , {
    name: '牛肉两吃',
    num: 0,
    price: 50
  }
  , {
    name: '峨眉雪',
    num: 0,
    price: 5
  }
  , {
    name: '劲酒',
    num: 0,
    price: 30
  }
  , {
    name: '可乐',
    num: 0,
    price: 5
  }
  , {
    name: '郎酒',
    num: 0,
    price: 30
  }
  , {
    name: '酸角汁',
    num: 0,
    price: 10
  }
  , {
    name: '唯怡',
    num: 0,
    price: 30
  }


]
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
      for (let item of temp) {
        if (item.title === action.food) {
          item.num--;
          break;
        }
      }
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