import React, { Component } from 'react';
import { connect } from 'react-redux';
//引入antd组件
import { ActivityIndicator } from 'antd-mobile';
//引入DevTools组件
import DevTools from './DevTools.js'
//引入自定义组件
import Tab from './components/Order/Tab.js';
import CheckBar from './components/Order/CheckBar.js';
import BackBth from './components/Order/BackBtn.js';
//引入样式
import style from '../theme/css/Order.less';
//引入actions
import { fetchMenuList, orderAddMenu } from '../actions/actions.js';
//tab组件里面的tab页
class Order extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    //拿菜单数据
    dispatch(fetchMenuList())
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.menuList.length && (!nextProps.orderList[nextProps.params.id].data.length)) {
      //拿到菜单数据后将菜单数据合并到当前客户的数据集
      //?这里的合并是不是将两个对象建立了联系
      nextProps.dispatch(orderAddMenu(nextProps.menuList, nextProps.params.id))
    }
  }
  render() {
    console.log(this.props.menuList[0] === this.props.orderList[this.props.params.id].data[0]);
    const { isFetching, orderList } = this.props
    const num = this.props.params.id;
    return (
      <div className={style.wrap}>
        {
          !isFetching &&
          <div className={style.normal}>
            <header>
              <BackBth url='/order' />
              {num}号桌
            </header>
            <div>
              <Tab data={orderList[num].data || []} num={num} />
            </div>
            <CheckBar orderNum={num} />

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
    menuList: state.posts.menuList,
    orderList: state.handleOrder
    //注意这里不能直接返回state,因为组件不需要监听整个state树的变化,如果这样做,每次state变化,组件就会重新渲染.mapStateToProps一旦被定义,那么组件就会监听state树
  }
}
export default connect(mapStateToProps)(Order);
