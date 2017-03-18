import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd-mobile';
//tab组件里面的tab页
const TabPane = Tabs.TabPane;
class Order extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch()
  }

  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="进行中" key="1">
          </TabPane>
          <TabPane tab="历史订单" key="2">

          </TabPane>
        </Tabs>
      </div>
    )
  }
}
export default connect()(Order);
