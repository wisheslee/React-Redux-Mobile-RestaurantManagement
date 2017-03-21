import React, { Component } from 'react';
//引入browserHistory来控制路由
import { browserHistory } from 'react-router';
import { ActivityIndicator } from 'antd-mobile';
import { PickerView, Button, NavBar } from 'antd-mobile';
import { connect } from 'react-redux';
import { fetchTableList, newOrder } from '../actions/actions.js';
import BackBth from './components/Order/BackBtn.js';
import DevTools from './DevTools.js';
import style from '../theme/css/Pick.less';
class Pick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    }
  }
  componentDidMount() {
    //获取到的数据都在store里面,需要用connect去拿再传给组件的props
    this.props.dispatch(fetchTableList());
  }

  onChange(value) {
    this.setState({
      value
    });
  };
  handleSubmit(data) {
    if (!this.state.value) {
      this.props.dispatch(newOrder(data[0][0].value));
      browserHistory.push(`/order/${data[0][0].value}`);
    } else {
      this.props.dispatch(newOrder(this.state.value));
      browserHistory.push(`/order/${this.state.value[0]}`);
    }

  }
  render() {
    const { isFetching, tableList, orderList } = this.props;
    const data = [];
    data[0] = [];
    data[1] = [];
    //在render之前,将桌台数进行去重
    if (tableList[0]) {
      for (let item of tableList[0]) {
        if (!orderList[item.value]) {
          data[0].push(item)
        }
      }
      data[1] = tableList[1].slice();
    }
    return (
      <div style={{ height: '100%' }}>
        {
          !isFetching &&
          <div className={style.wrap}>
            <div>
              <header>
                <BackBth url='/' />
                下单
              </header>
            </div>
            <div>
              <PickerView
                onChange={this.onChange.bind(this)}
                value={this.state.value}
                data={data || []}
                cascade={false}
                styles={{ height: '100%' }}
              />
            </div>

            <div>
              <Button className="btn" type="primary" size={'large'} across={true} onClick={this.handleSubmit.bind(this, data)}>下一步</Button>
            </div>
          </div >
        }
        {
          isFetching &&
          <ActivityIndicator toast text="正在加载" cols='2' />
        }
        <DevTools />
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    tableList: state.posts.tableList,
    orderList: state.handleOrder,
    isFetching: state.posts.isFetching
  }
}
export default connect(mapStateToProps)(Pick);