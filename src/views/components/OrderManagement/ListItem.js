import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Button, WhiteSpace, Modal } from 'antd-mobile';
import style from '../../../theme/css/ListItem.less';
import { connect } from 'react-redux';
import { checkOut } from '../../../actions/actions.js';
const alert = Modal.alert;
class ListItem extends Component {
  render() {
    const { data, dispatch } = this.props;
    return (
      <div>
        <WhiteSpace size="sm" />
        <div className={style.wrap}>
          <h4>大厅<span>{data.num}</span>号桌</h4>
          <table>
            <tbody>
              <tr>
                <td>用餐人数</td>
                <td>{data.people}人</td>
              </tr>
              <tr>
                <td>开始用餐时间</td>
                <td>{data.date}</td>
              </tr>
            </tbody>
          </table>
          <Button className="btn" type="primary" across={true} size='small' style={{ fontSize: '36px' }} onClick={() => alert('确定结账么？', '', [
            { text: '取消' },
            {
              text: '确定', onPress: () => {
                dispatch(checkOut(data.num));
                browserHistory.push('/');
              }, style: { fontWeight: 'bold' }
            },
          ])}>结账</Button>
        </div>
        <WhiteSpace size="sm" />
      </div>
    );
  }
}

export default connect()(ListItem);