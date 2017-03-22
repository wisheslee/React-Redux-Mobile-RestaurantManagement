import React, { Component } from 'react';
import { Grid, Button, Modal } from 'antd-mobile';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import { newOrder } from '../actions/actions.js'
import style from '../theme/css/TableManagement.less';
const prompt = Modal.prompt;
const alert = Modal.alert;
class TableManagement extends Component {
  handleClick(el, index) {
    if (el.icon.match(/ing\.png$/)) {
      return alert('用餐中', '', [
        { text: '确定', style: { fontWeight: 'bold' } },
      ])
    } else {
      return prompt('请输入用餐人数', '',
        [
          { text: '取消' },
          {
            text: '提交',
            onPress: value => {
              const value1 = [index + 1, value];
              if (value) {
                this.props.dispatch(newOrder(value1));
                browserHistory.push(`/order/${index + 1}`)
              } else {
                return alert('请输入人数', '', [
                  { text: '确定', style: { fontWeight: 'bold' } },
                ])
              }

            }
          },
        ])

    }
  }
  render() {
    let temp = this.props.data;
    let data = []
    for (let i = 0; i < 20; i++) {
      data[i] = {
        icon: '/img/free.png', text: `第${i + 1}桌空闲`
      }
    }
    for (let i in temp) {
      if (temp[i].status) {
        data[i - 1] = { icon: '/img/ing.png', text: `第${i}桌用餐中` };
      }
    }
    return (
      <div className={style.wrap}>
        <Button className="btn" type="primary" across={true} style={{
          height: '0.9rem', position: 'fixed', top: '0px', width: '100%', zIndex: '999'
        }}>桌台管理</Button>
        <Grid data={data} columnNum={3} onClick={(el, index) => { this.handleClick(el, index) }} />
      </div>

    );
  }
}
function mapStateToProps(state) {
  return {
    data: state.handleOrder
  }
}
export default connect(mapStateToProps)(TableManagement);