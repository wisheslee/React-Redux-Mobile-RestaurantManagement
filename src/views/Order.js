import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
//引入antd组件
import { ActivityIndicator, NavBar } from 'antd-mobile';
//引入DevTools组件
import DevTools from './DevTools.js'
//引入自定义组件
import Tab from './components/Order/Tab.js';
import BackBtn from './components/Order/BackBtn.js';
import CheckBar from './components/Order/CheckBar.js';
//引入样式
import style from '../theme/css/Order.less';
//引入actions
import { fetchMenuList } from '../actions/actions.js';
//tab组件里面的tab页
class Order extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchMenuList())
  }

  render() {
    console.log(this.props);
    const { isFetching, data, operateFood } = this.props
    return (
      <div className={style.wrap}>
        {
          !isFetching &&
          <div className={style.normal}>
            <NavBar leftContent="返回" mode="dark" onLeftClick={() => browserHistory.push('/order')}
            >菜单</NavBar>
            <div>
              <Tab data={data} />
            </div>
            <CheckBar />

          </div>
        }
        {
          isFetching &&
          <ActivityIndicator toast text="正在加载" />
        }
        <DevTools />
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    isFetching: state.posts.isFetching,
    data: state.posts.menuList,
    operateFood: state.operateFood
    //注意这里不能直接返回state,因为组件不需要监听整个state树的变化,如果这样做,每次state变化,组件就会重新渲染.mapStateToProps一旦被定义,那么组件就会监听state树
  }
}
export default connect(mapStateToProps)(Order);
