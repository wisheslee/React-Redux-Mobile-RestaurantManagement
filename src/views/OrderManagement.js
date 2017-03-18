import React, { Component } from 'react';
import { Tabs } from 'antd-mobile';
import ListItem from './components/Order/ListItem.js';
const TabPane = Tabs.TabPane;
class OrderManagement extends Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1" animated={false} >
          <TabPane tab="进行中" key="1">
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </TabPane>
          <TabPane tab="历史订单" key="2">
            <ListItem />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default OrderManagement;