import React, { Component } from 'react';
import { Button, WingBlank } from 'antd-mobile';
import ListItem from './components/OrderManagement/ListItem.js';
import style from '../theme/css/OrderManagement.less';
import { connect } from 'react-redux';

class OrderManagement extends Component {
  render() {
    let dataList = [];
    for (let item in this.props.data) {
      if (this.props.data[item].status) {
        dataList.push(this.props.data[item]);
      }
    }
    return (
      <div className={style.wrap}>

        <Button className="btn" type="primary" across={true} style={{ height: '0.9rem', position: 'fixed', top: '0px', width: '100% ' }}>
          订单管理
        </Button>

        {!dataList.length ?
          (<div className={style.warn}>
            <div>暂时没有订单~~~</div>
          </div>) :
          (<div>
            <WingBlank size="md">
              {
                dataList.map(item => (<ListItem data={item} key={item.num} />))
              }
            </WingBlank>
          </div>)
        }
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    data: state.handleOrder
  }
}
export default connect(mapStateToProps)(OrderManagement);