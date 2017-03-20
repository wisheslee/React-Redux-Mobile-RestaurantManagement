import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    const { isFetching, data } = this.props
    return (
      <div className={style.wrap}>
        {
          !isFetching &&
          <div className={style.normal}>
            <header >
              <BackBtn url='/' />
              菜单
            </header>
            <div>
              <Tab data={data} />
            </div>
            <CheckBar />

          </div>
        }
        {
          isFetching &&
          <div className={style.loading} >
            <img src={require('../theme/img/loading.gif')} alt="" />
          </div>
        }
        <DevTools />
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    isFetching: state.posts.isFetching,
    data: state.posts.menuList

    //注意这里不能直接返回state,因为组件不需要监听整个state树的变化,如果这样做,每次state变化,组件就会重新渲染.mapStateToProps一旦被定义,那么组件就会监听state树
  }
}
export default connect(mapStateToProps)(Order);
